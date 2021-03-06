import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { strings } from "../../../../configuration/assets";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import StorageIcon from "@material-ui/icons/Storage";
import SettingsIcon from "@material-ui/icons/Settings";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {
  paths,
  primaryPaths,
} from "../../../../configuration/core/route/Address";
import {
  ListItemIconPrimary,
  CustomLink,
  ListItemTextSecondary,
  ListContainer,
  ListItemContainer,
} from "./styles";

export default function MenuList() {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const menus = [
    {
      id: 1,
      name: strings.menu.home,
      icon: <HomeOutlinedIcon />,
      url: primaryPaths.home,
      isSubMenu: false,
    },
    {
      id: 2,
      name: strings.menu.sales,
      icon: <MonetizationOnIcon />,
      url: paths.sales.index,
      isSubMenu: false,
    },
    {
      id: 3,
      name: "Configuration",
      icon: <SettingsIcon />,
      isSubMenu: true,
      isOpen: true,
      subMenus: [
        {
          id: 4,
          name: strings.menu.storage,
          icon: <StorageIcon />,
          url: primaryPaths.storage,
          isSubMenu: false,
        },
        {
          id: 5,
          name: strings.menu.services,
          icon: <AssignmentIcon />,
          url: primaryPaths.services,
          isSubMenu: false,
        },
      ],
    },
  ];

  return (
    <ListContainer component='nav' aria-labelledby='nested-list-subheader'>
      {menus.map((menuItem, index) =>
        menuItem.isSubMenu ? (
          <>
            <ListItem
              key={`menu-${index}`}
              button
              onClick={() => {
                setOpenSubMenu(!openSubMenu);
              }}
            >
              <ListItemIconPrimary>{menuItem.icon}</ListItemIconPrimary>
              <ListItemTextSecondary primary={menuItem.name} />
              {openSubMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse
              in={openSubMenu}
              timeout='auto'
              unmountOnExit
              key={`colapse-${index}`}
            >
              <List component='div' disablePadding key={`ddd-${index}`}>
                {menuItem.subMenus.map((subMenuItem, index) => (
                  <CustomLink
                    key={`subMenu-${index}-${subMenuItem.url}`}
                    to={subMenuItem.url}
                  >
                    <ListItemContainer>
                      <ListItemIconPrimary>
                        {subMenuItem.icon}
                      </ListItemIconPrimary>
                      <ListItemText primary={subMenuItem.name} />
                    </ListItemContainer>
                  </CustomLink>
                ))}
              </List>
            </Collapse>
          </>
        ) : (
          <CustomLink to={menuItem.url} key={`Custom-Link--${index}`}>
            <ListItem button>
              <ListItemIconPrimary>{menuItem.icon}</ListItemIconPrimary>
              <ListItemText primary={menuItem.name} />
            </ListItem>
          </CustomLink>
        )
      )}
    </ListContainer>
  );
}
