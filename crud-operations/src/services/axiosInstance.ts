import { API } from "@constants/api";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${API.BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});