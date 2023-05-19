import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Container, Typography, Box, AppBar, Button } from "@mui/material";
import styled from "@emotion/styled";
import { LogoImage } from "public/images";
import AppLink from "./AppLink";
import UploadBook from "./UploadBook";
import WalletButton from "./WalletButton";

const MainLayout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <AppBar
        component="nav"
        sx={{ background: "white", paddingTop: 3, paddingBottom: 3 }}
        elevation={0}
      >
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <Box component="img" src={LogoImage} sx={{ width: 41 }} />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 34,
                  color: "#4A3AFF",
                }}
              >
                BookExchangeDAO
              </Typography>
            </Box>
            <Box>
              <StyledLink
                href={AppPath.MY_BOOK}
                active={pathname === AppPath.MY_BOOK ? "primary.dark" : "black"}
              >
                My Book
              </StyledLink>
              <StyledLink
                href={AppPath.REQUESTS}
                active={
                  pathname === AppPath.REQUESTS ? "primary.dark" : "black"
                }
                sx={{ marginRight: 3 }}
              >
                Request
              </StyledLink>
              <WalletButton />
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Box component="main" sx={{ paddingTop: "117px", paddingBottom: 8 }}>
        <Container>{children}</Container>
        <Box width="100%">
          <UploadBook />
        </Box>
      </Box>
    </>
  );
};

MainLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainLayout;

export const AppPath = {
  MY_BOOK: "/my-book",
  REQUESTS: "/requests",
};

const StyledLink = styled(AppLink)((props) => ({
  color: props.color,
  fontWeight: 700,
  fontSize: 20,
  padding: 8,
}));
