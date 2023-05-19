import React, { useState } from "react";
import { AppDialog, CenterBox } from "./index";
import { AddCircle } from "@mui/icons-material";
import { Button, Typography, TextField, Stack } from "@mui/material";
import { useAppContext } from "../context/AppContext";

const UploadBook = () => {
  const { mintBook } = useAppContext();

  const [isShow, setIsShow] = useState(false);
  const [book, setBook] = useState({ title: "", author: "" });

  const handleMintBook = () => {
    mintBook(book);
    setIsShow(false);
  };

  const handleChangeBook = (key) => (event) =>
    setBook((prevBook) => ({ ...prevBook, [key]: event.target.value }));

  return (
    <CenterBox>
      <Button
        size="large"
        variant="outlined"
        startIcon={<AddCircle fontSize="large" />}
        onClick={() => setIsShow(true)}
      >
        Upload your book
      </Button>

      <AppDialog sx={{ p: 4 }} open={isShow}>
        <Stack spacing={2}>
          <Typography sx={{ fontWeight: 500, fontSize: 24, color: "#4A3AFF" }}>
            Upload your book
          </Typography>
          <TextField
            id="title"
            label="Book title"
            variant="outlined"
            onChange={handleChangeBook("title")}
          />

          <TextField
            id="author"
            label="Author"
            variant="outlined"
            onChange={handleChangeBook("author")}
          />

          <Button
            size="large"
            variant="contained"
            sx={{ width: 400 }}
            onClick={handleMintBook}
          >
            Upload
          </Button>
        </Stack>
      </AppDialog>
    </CenterBox>
  );
};

export default UploadBook;
