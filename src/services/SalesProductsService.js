import api from "./Api";

const BASE_URL = "V1/sales-products";

export const listaAll = () => {
  return api.get(BASE_URL);
};
