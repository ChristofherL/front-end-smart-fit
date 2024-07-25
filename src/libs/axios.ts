import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://test-frontend-developer.s3.amazonaws.com/data/locations.json",
});
