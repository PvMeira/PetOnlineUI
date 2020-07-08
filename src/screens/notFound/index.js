import React from "react";
import Grid from "@material-ui/core/Grid";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import { H1Title } from "./styles";
import { strings } from "../../configuration/assets/";

const GenericNotFound = () => {
  return (
    <Grid container justify='center'>
      <Grid item md={12} justify='center' container>
        <Grid>
          <ErrorOutlineRoundedIcon fontSize={"large"} />
        </Grid>
      </Grid>
      <Grid item md={12}>
        <H1Title>{strings.notFound.title}</H1Title>
      </Grid>
    </Grid>
  );
};

export default GenericNotFound;
