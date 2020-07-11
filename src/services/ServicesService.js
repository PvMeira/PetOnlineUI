import api from "./Api";

const BASE_URL = "V1/config/services";
const paths = {};

export const listAll = () => {
  return api.get(`${BASE_URL}`);
};
