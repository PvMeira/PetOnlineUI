import styled from "styled-components";
import { ListItemIcon, ListItemText, List, ListItem } from "@material-ui/core";
import { colors } from "../../../../configuration/assets";
import { Link } from "react-router-dom";

export const ListItemIconPrimary = styled(ListItemIcon)`
  color: ${colors.primary};
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${colors.secondary};
`;

export const ListItemTextSecondary = styled(ListItemText)`
  color: ${colors.secondary};
`;

export const ListContainer = styled(List)`
  width: 100%;
  maxwidth: 360;
  background-color: colors.white;
`;

export const ListItemContainer = styled(ListItem)`
  padding-left: 40px;
`;
