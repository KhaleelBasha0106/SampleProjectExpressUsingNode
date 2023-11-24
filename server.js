const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//  database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "spring_boot",
});

// checking the database connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

//making api for data
app.get("/person", (req, res) => {
  const sql = "SELECT * FROM PERSON";
  db.query(sql, (error, data) => {
    if (error) return res.send(error);
    return res.send(data);
  });
});

app.get("/person/:id", (req, res) => {
  const personId = req.params.id;

  const sql = "SELECT * FROM PERSON WHERE ID = ?";
  const values = [personId];

  db.query(sql, values, (error, data) => {
    if (error) {
      console.error("Error getting data:", error);
      return res.status(500).json({ error: "Error getting data" });
    }
    if (data.length === 0) {
      return res
        .status(404)
        .json({ message: `No record for given Id ${personId}` });
    } 
      console.log("Data getting successful");
      return res.status(200).send(data);
    
  });
});

app.post("/person", (req, res) => {
  // Extract data from the request body
  const { name, email, job } = req.body;

  // Perform validation if needed

  // SQL query to insert data into the database
  const sql = `INSERT INTO PERSON (name, email, job) VALUES (?, ?, ?)`;
  const values = [name, email, job];

  // Execute the query
  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Error adding data:", error);
      return res.status(500).json({ error: "Error adding data" });
    }

    console.log("New data added successfully");
    return res.status(201).json({ message: "Data added successfully" });
  });
});

app.put("/person/:id", (req, res) => {
  // Extract data from the request body
  const { name, email, job } = req.body;
  const personId = req.params.id; // Extract person ID from URL parameter

  // Perform validation if needed

  // SQL query to update data in the database based on person ID
  const sql = `UPDATE PERSON SET name=?, email=?, job=? WHERE id=?`;
  const values = [name, email, job, personId];

  // Execute the query
  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Error updating data:", error);
      return res.status(500).json({ error: "Error updating data" });
    } else if (result.affectedRows === 0) {
      return res
        .status(402)
        .send({ message: `No record found for given Id ${personId}` });
    }
    console.log("Data updated successfully");
    return res.status(200).json({ message: "Data updated successfully" });
  });
});

app.delete("/person/:id", (req, res) => {
  const personId = req.params.id; // Extract person ID from URL parameter

  // SQL query to delete data from the database based on person ID
  const sql = `DELETE FROM PERSON WHERE id=?`;
  const values = [personId];

  // Execute the query
  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Error deleting data:", error);
      return res.status(500).json({ error: "Error deleting data" });
    }

    if (result.affectedRows === 0) {
      // If no rows were affected, it means no record was found with the given ID
      return res
        .status(404)
        .json({ error: "No record found with the provided ID" });
    }

    console.log("Data deleted successfully");
    return res.status(200).json({ message: "Data deleted successfully" });
  });
});

app.get("/", (req, res) => {
  res.send("From backend side");
});

// port
const port = process.env.port || 3001;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
