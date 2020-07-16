import styled from "styled-components";
import { colors } from "../../../configuration/assets";
import { Button, Grid } from "@material-ui/core";

export const RootContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: stretch;
  padding: 1.5rem;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: auto;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${colors.white};
`;

export const CustomButton = styled(Button)`
  margin-right: 8px;
`;

export const ChildrenGrid = styled(Grid)`
  flex: 1;
  padding: 2rem 0rem;
  min-width: 90%;
`;
