import React, { memo } from "react";
import { Link } from "@mui/material";

const AppLink = ({ children, ...otherProps }) => {
  return (
    <Link underline="none" {...otherProps}>
      {children}
    </Link>
  );
};

export default memo(AppLink);
