import React from "react";
import { Typography } from "@material-ui/core";
import { CustomLink } from "../../../components/global/menuBar/menus/styles";
import { strings } from "../../../configuration/assets";

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {strings.screens.login.coopyright.cr}
      <CustomLink color='inherit' href='https://material-ui.com/'>
        {strings.screens.login.coopyright.company}
      </CustomLink>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
