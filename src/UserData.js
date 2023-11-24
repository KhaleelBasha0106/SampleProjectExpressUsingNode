import React from "react";
import { useState, } from "react";
import axios from "axios";
import { Box, TextField, Button, FormControl, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const UserData = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    job: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/person", data) // Ensure the backend API endpoint is correct
      .then((res) => {
        console.log(res.data); // Logging the response for debugging
        alert("Data submitted successfully");
      })
      .catch((err) => {
        console.error("Error submitting data:", err); // Log the error for debugging
        alert("Error submitting data");
      });
  };

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name.toLowerCase()]: event.target.value }); // Use lowercase for consistency
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <Box sx={{ border: 1, padding: 10, borderRadius: 2 }}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Typography align="center" variant="h5">
              Enter details
            </Typography>
            <br />
            <TextField
              label="Name"
              name="Name"
              variant="outlined"
              value={data.name}
              onChange={changeHandler}
            />
            <br />
            <TextField
              label="Email"
              name="Email"
              variant="outlined"
              value={data.email}
              onChange={changeHandler}
            />
            <br />
            <TextField
              label="Job"
              name="Job"
              variant="outlined"
              value={data.job}
              onChange={changeHandler}
            />
            <br />
            <Button variant="contained" type="submit">
              Submit
            </Button><br />
            <Link to='/deletedata'><Button type="submit" variant="contained" color="error" fullWidth>Delete</Button></Link>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default UserData;
