import React from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import StorageIcon from "@material-ui/icons/Storage";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { strings, colors } from "../../../configuration/assets";

export default function MenuBar(props) {
  const classes = useStyles();

  const icons = [
    { name: strings.menu.home, icon: <HomeOutlinedIcon />, url: "/" },
    {
      name: strings.menu.sales,
      icon: <MonetizationOnIcon />,
      url: "/sales",
    },
    { name: strings.menu.storage, icon: <StorageIcon />, url: "/storage" },
  ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            <Link
              to={"/"}
              style={{ textDecoration: "none", color: colors.black }}
            >
              {strings.menu.appName}
            </Link>
          </Typography>
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
          <List>
            {icons.map((icon, index) => (
              <Link
                key={index}
                to={`${icon.url}`}
                style={{ textDecoration: "none", color: colors.secondary }}
              >
                <ListItem button key={icon.name}>
                  <ListItemIcon style={{ color: colors.primary }}>
                    {icon.icon}
                  </ListItemIcon>
                  <ListItemText primary={icon.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {props.children}
      </main>
    </div>
  );
}
