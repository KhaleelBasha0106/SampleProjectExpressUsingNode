import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
const OptionFile = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 15 }}>
      <Box sx={{ border: 1, padding: 10, borderRadius: 3 }}>
        <Link to="/user">
          <Button variant="contained">User Details</Button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/deletedata">
          <Button variant="contained" color="error">
            Delete user Data
          </Button>
        </Link>&nbsp;&nbsp;&nbsp;
        <Link to="/details">
          <Button variant="contained" color="success">
            users Data
          </Button>
        </Link>&nbsp;&nbsp;&nbsp;
        <Link to="/editdata">
          <Button variant="contained" color="secondary">
            Edit user Data
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default OptionFile;
