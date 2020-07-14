import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { Link, useHistory } from "react-router-dom";
import { strings, colors } from "../../../configuration/assets";
import MenuList from "./menus";
import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated } from "../../../configuration/redux/reducers/login/login-selector";
import { doLogout } from "../../../configuration/redux/reducers/login/login-actions";
import { IconButton, Menu, MenuItem, Grid } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

export default function MenuBar(props) {
  const classes = useStyles();
  const isAuth = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(doLogout());
    history.push("/");
  };

  return isAuth ? (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Grid container direction='row' justify='space-around'>
            <Grid item xs={6}>
              <Typography variant='h6' noWrap>
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: colors.primary }}
                >
                  {strings.menu.appName}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "end" }}>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                style={{ color: colors.primary }}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <MenuList />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {props.children}
      </main>
    </div>
  ) : (
    <div className={classes.root}>{props.children}</div>
  );
}
