import axios from "axios";

const dev = "http://localhost:1337";
const prod = "http://16.170.243.158:1337";

export default axios.create({
  baseURL: dev,
  timeout: 10000,
});
