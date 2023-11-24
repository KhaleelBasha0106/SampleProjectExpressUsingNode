import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  tableCellClasses,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const elements = ["Id", "Name", "Email", "Job"];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/person")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box className="App">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {elements.map((ele, index) => {
                return (
                  <StyledTableCell align="center" key={index}>
                    {ele}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((person) => (
              <StyledTableRow key={person.id}>
                <StyledTableCell component="th" scope="row" align="center">
                  {person.id}
                </StyledTableCell>
                <StyledTableCell align="center">{person.name}</StyledTableCell>
                <StyledTableCell align="center">{person.email}</StyledTableCell>
                <StyledTableCell align="center">{person.job}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default App;
