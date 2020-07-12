import api from "./Api";

const BASE_URL = "V1/config/services";
const paths = { search: `${BASE_URL}/search` };

export const listAll = () => {
  return api.get(`${BASE_URL}`);
};

export const search = (page, size, name) => {
  return api.get(
    `${paths.search}?page=${page}&size=${size} ${name ? "&name=" + name : ""}`
  );
};

export const findById = (id) => {
  return api.get(`${BASE_URL}/${id}`);
};

export const update = (id, body) => {
  return api.put(`${BASE_URL}/${id}`, JSON.stringify(body));
};

export const save = (body) => {
  return api.post(`${BASE_URL}`, JSON.stringify(body));
};
