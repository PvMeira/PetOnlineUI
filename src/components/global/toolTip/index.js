import React from "react";
import { Tooltip, Fade } from "@material-ui/core";

const ApiToolTip = ({ text = "", children }) => (
  <Tooltip
    title={text}
    arrow
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }}
  >
    {children}
  </Tooltip>
);

export default ApiToolTip;
