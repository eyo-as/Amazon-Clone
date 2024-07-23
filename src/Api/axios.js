import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-8b029/us-central1/api",
});

export { AxiosInstance };
