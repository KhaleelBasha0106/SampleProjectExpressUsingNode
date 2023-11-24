import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Box,FormControl,Typography,TextField,Button } from '@mui/material'
const EditUserData = () => {
    const [data, setData] = useState({
        id:'',
        name: "",
        email: "",
        job: "",
      });
      const changeHandler = (event) => {
        setData({ ...data, [event.target.name.toLowerCase()]: event.target.value }); // Use lowercase for consistency
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:3001/person/${data.id}`, data) // Ensure the backend API endpoint is correct
          .then((res) => {
            console.log(res.data); // Logging the response for debugging
            alert("Data Updated successfully");
          })
          .catch((err) => {
            console.error("Error submitting data:", err); // Log the error for debugging
            alert("Error submitting data");
          });
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
              label="Id"
              name="Id"
              variant="outlined"
              value={data.id}
              onChange={changeHandler}
            />
            <br />
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
          </FormControl>
        </form>
      </Box>
    </Box>
  )
}

export default EditUserData
