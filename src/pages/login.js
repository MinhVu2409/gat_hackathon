import React from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { CONNECT_STATUS, useAppContext } from "../context/AppContext";
import { LogoImage } from "public/images";
import MintPFP from "../components/sn-login/MintPFP";
import { CenterBox } from "../components";

const Login = () => {
  const { login, loginStatus } = useAppContext();

  const isNotConnected = [
    CONNECT_STATUS.NOT_CONNECT,
    CONNECT_STATUS.CONNECTING,
  ].includes(loginStatus);
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={6}
        sx={{
          background: "linear-gradient(180deg, #4A3AFF 0%, #FFFFFF 100%)",
        }}
      >
        <CenterBox>
          <Box component="img" src={LogoImage} sx={{ width: 162 }} />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 34,
              color: "#4A3AFF",
            }}
          >
            BookExchangeDAO
          </Typography>
        </CenterBox>
      </Grid>
      <Grid item xs={12} sm={6} component={Paper} elevation={6} square>
        <CenterBox>
          {isNotConnected ? (
            <Button
              size="large"
              variant="contained"
              sx={{ width: 500, maxWidth: "40vw" }}
              onClick={login}
            >
              {loginStatus === CONNECT_STATUS.NOT_CONNECT
                ? "Connect your wallet"
                : "Connecting"}
            </Button>
          ) : (
            <MintPFP />
          )}
        </CenterBox>
      </Grid>
    </Grid>
  );
};

export default Login;
Login.getLayout = function getLayout(page) {
  return page;
};
