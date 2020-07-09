import React, { useState } from "react";
import PageDefault from "../../../components/pageDefault";
import ItemListFilter from "./filter";
import ItemCard from "../../../components/itemCard";
import { Divider, Grid } from "@material-ui/core";
import { search } from "../../../services/ItemService";
import PaginationHelper from "../../../components/pagination";
import { useHistory } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState({ content: [], totalPages: 0 });
  const [filter, setFilter] = useState({ name: "", description: "" });
  const history = useHistory();

  const searchItems = async (page, values) => {
    setFilter(values);
    const { name, description } = values;
    const response = await search(page, 4, name);
    setItems(response);
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
            <ItemCard {...item} imageTitle='image' onClickCard={onClickCard} />
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
