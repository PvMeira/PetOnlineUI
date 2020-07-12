import React from "react";
import { Grid } from "@material-ui/core";

const PageDefault = ({ title, children }) => {
  return (
    <Grid container>
      <Grid item style={{ textAlign: "start" }} md={12}>
        <h3 style={{ fontSize: "22px" }}>{title}</h3>
      </Grid>
      <Grid item style={{ backgroundColor: "white", width: "100%" }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PageDefault;
