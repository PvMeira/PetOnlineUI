import axios from "axios";

export default axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
    put: {
      "Content-Type": "application/json",
    },
  },
});
