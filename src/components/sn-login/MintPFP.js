import React, { useState } from "react";
import WalletButton from "../WalletButton";
import { Typography, Box, Divider, Button } from "@mui/material";
import { ListenPersonImage } from "public/images";
import { useAppContext } from "../../context/AppContext";
import { AppPath } from "../MainLayout";
import AppDialog from "../AppDialog";

const MintPFP = () => {
  const { mintPFP } = useAppContext();

  const [isSuccessMint, setIsSuccessMint] = useState(false);

  const handleMintPFP = () => {
    const isResult = mintPFP();
    console.log("isResult", isResult);
    setIsSuccessMint(isResult);
  };

  return (
    <>
      <WalletButton sx={{ position: "fixed", top: 28, right: 110 }} />
      <Typography sx={{ fontWeight: 400, fontSize: 24, color: "#4A3AFF" }}>
        You are not yet a member of Book Exhcange DAO
      </Typography>
      <Typography
        sx={{ fontWeight: 600, fontSize: 34, color: "#4A3AFF", width: 500 }}
      >
        Mint your own PFP and join Book Exchange community
      </Typography>
      <Divider
        sx={{
          borderColor: "#4A3AFF",
          width: 66,
          borderWidth: 2,
          borderRadius: 2,
          my: 2,
        }}
      />
      <Box component="img" src={ListenPersonImage} sx={{ width: 250, mb: 2 }} />
      <Button
        sx={{ width: 296, height: 75 }}
        onClick={handleMintPFP}
        size="large"
        variant="contained"
      >
        Mint PFP For Free
      </Button>

      <AppDialog sx={{ p: 4 }} open={isSuccessMint}>
        <Typography sx={{ fontWeight: 500, fontSize: 24, color: "#4A3AFF" }}>
          Mint PFP success!
        </Typography>

        <Box
          component="img"
          src={ListenPersonImage}
          sx={{ width: 193, my: 2 }}
        />

        <Button
          sx={{ width: 400, height: 75 }}
          size="large"
          variant="contained"
          href={AppPath.MY_BOOK}
        >
          Join now
        </Button>
      </AppDialog>
    </>
  );
};

export default MintPFP;
