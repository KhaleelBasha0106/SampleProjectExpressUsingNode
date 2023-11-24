import React, { useState } from "react";
import { Box, TextField, Button, FormControl, Typography } from "@mui/material";
import axios from "axios";

const DeleteUserData = () => {
  const [id, setId] = useState(""); // Initialize id state with an empty string

  const handler = (e) => {
    e.preventDefault();

    if (!id) {
      alert("Please enter an ID"); // Show an alert if ID is empty
      return;
    }

    axios
      .delete(`http://localhost:3001/person/${id}`)
      .then(() => {
        alert(`Record deleted for given ID ${id}`)
      })
      .catch((error) => {
        console.error("Error deleting data:", error.response || error.message); // Log detailed error response or message
        alert("Error deleting data: " + error.message);
      });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <Box sx={{ border: 1, padding: 10, borderRadius: 3 }}>
        <form onSubmit={handler}>
          <FormControl>
            <Typography variant="h6" align="center">
              Enter ID
            </Typography>
            <TextField
              label="ID"
              name="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <Button variant="contained" color="error" type="submit">
              Delete
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default DeleteUserData;
