import React from "react";
import { useAppContext } from "../context/AppContext";
import { Button, Box } from "@mui/material";
import { PhantomIcon } from "public/images";

const WalletButton = (props) => {
  const { walletAddress, logout } = useAppContext();

  return (
    <Button
      size="large"
      variant="contained"
      startIcon={<Box component="img" src={PhantomIcon} />}
      onClick={logout}
      {...props}
    >
      {walletAddress}
    </Button>
  );
};

export default WalletButton;
