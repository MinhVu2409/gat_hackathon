import MainLayout from "./MainLayout";
import AppLink from "./AppLink";
import AppDialog from "./AppDialog";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export { MainLayout, AppLink, AppDialog };

export const CenterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  textAlign: "center",
});
