import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { CenterBox } from "./index";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AppDialog({ children, ...otherProps }) {
  return (
    <Dialog
      maxWidth="lg"
      TransitionComponent={Transition}
      keepMounted
      {...otherProps}
    >
      <CenterBox sx={{ p: 4 }}>{children}</CenterBox>
    </Dialog>
  );
}
