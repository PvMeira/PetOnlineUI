import React from "react";
import PageDefault from "../../components/global/pageDefault";
import { useHistory } from "react-router-dom";
import { ButtonGroup, Button, Grid } from "@material-ui/core";
import { paths } from "../../configuration/core/route/Address";

const SalesIndex = () => {
  const history = useHistory();
  return (
    <PageDefault title='Sales'>
      <Grid container direction='row'>
        <Grid item xs={12} style={{ textAlign: "center", height: "15vw" }}>
          <ButtonGroup
            size='large'
            color='primary'
            aria-label='large outlined primary button group'
            variant='contained'
          >
            <Button onClick={() => history.push(paths.sales.new)}>
              Make a new sale
            </Button>
            <Button>Search a past sale</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </PageDefault>
  );
};

export default SalesIndex;
