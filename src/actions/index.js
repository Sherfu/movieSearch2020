import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

client.interceptors.request.use(
  function(config) {
    console.log(config);
    // Do something before request is sent
    return {
      ...config,
      params: {
        api_key: "6ed12e064b90ae1290fa326ce9e790ff",
        language: "en-US"
      }
    };
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
