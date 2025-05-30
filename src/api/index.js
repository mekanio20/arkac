import axios from "axios";

const api = axios.create({
  baseURL: "https://arkach.com.tm/api",
});

api.interceptors.request.use((config) => {
  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'TK';
  config.headers['Accept-Language'] = selectedLanguage;
  return config;
});

export default api;