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
import { toggleAuthenticated } from "../../../configuration/redux/reducers/login/login-actions";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
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
    dispatch(toggleAuthenticated());
    history.push("/login");
  };

  return isAuth ? (
    <div className={classes.divRoot}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' className={classes.link}>
            <Link to={"/"} className={classes.linkHome}>
              {strings.menu.appName}
            </Link>
          </Typography>
          <div style={{ color: colors.primary }}>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
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
              <MenuItem onClick={() => history.push("/profile")}>
                {strings.menu.profile}
              </MenuItem>
              <MenuItem onClick={() => handleLogout()}>
                {strings.menu.logout}
              </MenuItem>
            </Menu>
          </div>
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
    <div>{props.children}</div>
  );
}
