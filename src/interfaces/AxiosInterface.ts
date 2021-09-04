import axios from "axios";
import { basicUrl } from "../config/RestConfig";

export const axiosInstance = axios.create({
  baseURL: basicUrl,
  timeout: 60000,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
});
