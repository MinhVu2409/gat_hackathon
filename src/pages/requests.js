import React, { useState } from "react";
import {
  Button,
  Typography,
  Container,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Stack,
} from "@mui/material";
import { useAppContext } from "../context/AppContext";
import { getFormatAddress } from "../components/sn-my-book/SendRequestDialog";
import { DEFAULT_BOOK } from "../context/Helper";

const Request = () => {
  const { getMyBook } = useAppContext();

  const [requestList, setRequestList] = useState(DEFAULT_BOOK);

  const handleApprove = () => {
    alert("Approve");
    getMyBook();
  };

  const handleCancel = () => {
    alert("Cancel");
  };

  return (
    <Container>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 36,
          color: "#4A3AFF",
          textAlign: "center",
        }}
      >
        Request List
      </Typography>
      <TableContainer
        sx={{
          height: "calc(100vh - 300px)",
          overflow: "auto",
          my: 2,
        }}
      >
        <Table aria-label="simple table">
          <TableBody>
            {requestList.map((book, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 30,
                      color: "#1E1E1E",
                    }}
                  >
                    {book.title}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 24,
                      color: "#1E1E1E",
                    }}
                  >
                    {book.author}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 20,
                      color: "#1E1E1E",
                    }}
                  >
                    {getFormatAddress(book.ownerAddress)}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2} sx={{ float: "right" }}>
                    <Button
                      size="large"
                      variant="contained"
                      onClick={() => handleApprove(book)}
                    >
                      Approve
                    </Button>
                    <Button
                      size="large"
                      variant="contained"
                      color="error"
                      onClick={() => handleCancel(book)}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Request;
