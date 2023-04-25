import axios from "axios";
//ENV variables need prefix VITE_ and you need to import like the next line
const nasaEndpoint = import.meta.env.VITE_REACT_APP_NASA_ENDPOINT;
const nasaApiKey = import.meta.env.VITE_REACT_APP_NASA_API_KEY;

axios.interceptors.request.use(
  (config) => {
    config.params = config.params ? config.params : {};
    const configUrl = config.url;
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  getApod() {
    return axios.get(`${nasaEndpoint}planetary/apod`);
  },
  getApodByDate(date) {
    return axios.get(`${nasaEndpoint}planetary/apod?date=${date}`);
  },
};
