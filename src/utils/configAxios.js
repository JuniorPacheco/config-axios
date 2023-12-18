import axios from "axios";

const rickAndMortyAxios = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

rickAndMortyAxios.interceptors.request.use((config) => {
  //? Aqui generan toda la configuración antes de que la petición salga
  config.headers = {
    ...config.headers,
    Authorization: localStorage.getItem("JWT"),
  };
  return config;
});

export { rickAndMortyAxios };
