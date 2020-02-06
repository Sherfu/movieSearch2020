import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

client.interceptors.request.use(
  function(config) {
    // console.log(config);
    return {
      ...config,
      params: {
        api_key: "6ed12e064b90ae1290fa326ce9e790ff",
        language: "en-US"
      }
    };
  },
  function(error) {
    return Promise.reject(error);
  }
);
