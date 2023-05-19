import React from "react";
import { Box, Typography } from "@mui/material";
import { EmptyImage } from "public/images";
import { CenterBox } from "..";

const EmptyBook = () => {
  return (
    <Box height="75vh">
      <CenterBox>
        <Box component="img" src={EmptyImage} sx={{ width: 184 }} />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 24,
            color: "#4A3AFF",
            width: 450,
          }}
        >
          You don't have any books on the shelf yet. Please upload books to
          participate.
        </Typography>
      </CenterBox>
    </Box>
  );
};

export default EmptyBook;
