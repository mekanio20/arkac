import axios from "axios";

const api = axios.create({
  baseURL: "http://216.250.14.57:8000/api",
});

export default api;