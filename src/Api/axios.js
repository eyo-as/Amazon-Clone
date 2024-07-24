import axios from "axios";

const AxiosInstance = axios.create({
  // localhost
  // baseURL: "http://127.0.0.1:5001/clone-8b029/us-central1/api",

  // deployed version
  baseURL: "https://amazon-api-deploy-1270.onrender.com",
});

export { AxiosInstance };
