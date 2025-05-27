import axios from "axios";

const api = axios.create({
  baseURL: "https://arkach.com.tm/api",
});

export default api;