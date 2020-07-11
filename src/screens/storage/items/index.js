import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/pageDefault";
import ItemListFilter from "./filter";
import ApiCard from "../../../components/global/card";
import { Divider, Grid, Button } from "@material-ui/core";
import { search } from "../../../services/ItemService";
import PaginationHelper from "../../../components/pagination";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../../../configuration/redux/reducers/application/application-actions";

const ItemList = () => {
  const [items, setItems] = useState({ content: [], totalPages: 0 });
  const [filter, setFilter] = useState({ name: "", description: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    searchItems(1, filter);
  }, []);

  const searchItems = async (page, values) => {
    dispatch(toggleLoading());
    setFilter(values);
    const { name, description } = values;
    const response = await search(page, 4, name);
    setItems(response);
    dispatch(toggleLoading());
  };

  const handlePaginationChange = (event, value) => {
    searchItems(value, filter);
  };

  const onClickCard = (id) => {
    history.push(`/storage/${id}`);
  };
  return (
    <PageDefault title='Items'>
      <ItemListFilter onSubmitFunction={searchItems} />
      <Divider style={{ margin: "4px 4px 4px 4px" }} />
      <PaginationHelper
        totalPages={items.totalPages}
        handlePaginationChange={handlePaginationChange}
        message={false}
        show={items.content.length}
      />
      <Grid
        container
        direction='row'
        justify='flex-start'
        spacing={2}
        style={{ padding: "3% 5% 3% 5%" }}
      >
        {items.content.map((item) => (
          <Grid
            item
            sm={12}
            md={4}
            lg={3}
            key={item.id}
            style={{ marginBottom: "16px" }}
          >
            <ApiCard
              image={item.image}
              title={item.name}
              description={item.description}
              id={item.id}
              onClickCard={onClickCard}
            />
          </Grid>
        ))}
      </Grid>
      <PaginationHelper
        totalPages={items.totalPages}
        handlePaginationChange={handlePaginationChange}
        message
        show={items.content.length}
      />
    </PageDefault>
  );
};

export default ItemList;
