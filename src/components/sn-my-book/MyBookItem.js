import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { EmptyImage } from "public/images";
import { CenterBox } from "../index";

const MyBookItem = ({ book = {}, onSwap }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box sx={{ width: 260, textAlign: "center" }}>
      <Box
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        sx={{
          border: "1px solid #4A3AFF",
          borderRadius: "24px",
          height: 360,
          position: "relative",
        }}
      >
        <CenterBox>
          <Box component="img" height="184" src={EmptyImage} />
        </CenterBox>
        {isHover && (
          <CenterBox
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(182, 182, 182, 0.6)",
              borderRadius: "24px",
            }}
          >
            <Button
              size="large"
              variant="contained"
              onClick={() => onSwap(book)}
              sx={{ width: "70%" }}
            >
              Swap
            </Button>
          </CenterBox>
        )}
      </Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 20,
          color: "#1E1E1E",
        }}
      >
        {book.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: 16,
          color: "#585667",
          marginBottom: 4,
        }}
      >
        {book.author}
      </Typography>
    </Box>
  );
};

export default MyBookItem;
