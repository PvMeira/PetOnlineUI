import React from "react";
import {
  Drawer,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const SelectSalesItemDrawer = ({ open = false, items, onCloseHandler }) => {
  return (
    <Drawer
      anchor={"right"}
      open={open}
      onClose={onCloseHandler}
      PaperProps={{ style: { width: "30%" } }}
    >
      <Grid container justify='center'>
        <Grid item xs={12}>
          <Typography
            component='h4'
            variant='h4'
            style={{ textAlign: "center", margin: "8px 8px 8px 8px" }}
          >
            Sale Cart
          </Typography>
        </Grid>
        <Grid xs={12}>
          <List>
            {items.map((item) => (
              <ListItem>
                <Grid container justify='flex-start'>
                  <Grid item xs={4}>
                    <ListItemText primary={item.name} />
                  </Grid>
                  <Grid item xs={4}>
                    <ListItemText primary={item.value} />
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default SelectSalesItemDrawer;
