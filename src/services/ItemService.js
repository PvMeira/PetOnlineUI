import api from "./Api";

const BASE_URL = "V1/config/items";
const paths = {
  search: `${BASE_URL}/search`,
  categories: `${BASE_URL}/categories`,
};

export const search = (page, size, name) => {
  return api.get(
    `${paths.search}?page=${page}&size=${size} ${name ? "&name=" + name : ""}`
  );
};

export const findById = (id) => {
  return api
    .get(`${BASE_URL}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch(console.error);
};

export const listCategories = () => {
  return api
    .get(paths.categories)
    .then((response) => {
      return response.data;
    })
    .catch(console.error);
};

export const updateItem = (id, body) => {
  return api.put(`${BASE_URL}/${id}`, JSON.stringify(body));
};

export const save = (body) => {
  return api.post(`${BASE_URL}`, JSON.stringify(body));
};
