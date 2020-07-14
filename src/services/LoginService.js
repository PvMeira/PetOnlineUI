import api from "./Api";

const BASE_URL = "auth";
const paths = {
  signIn: `${BASE_URL}/signin`,
};

export const login = (username, password) => {
  return api.post(paths.signIn, JSON.stringify({ username, password }));
};
