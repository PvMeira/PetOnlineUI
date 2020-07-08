import React from "react";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const PaginationHelper = ({
  show,
  message,
  totalPages,
  handlePaginationChange,
}) => {
  return (
    <Grid container direction='column' alignContent='center'>
      <Grid item xs={12}>
        {show ? (
          <Pagination
            count={totalPages}
            variant='outlined'
            color='primary'
            size='large'
            onChange={handlePaginationChange}
          />
        ) : (
          message && <p>There is no itens...</p>
        )}
      </Grid>
    </Grid>
  );
};

export default PaginationHelper;
