import axios from "axios";

const BASE_URL =
  "https://api.thecatapi.com/v1/images/search?limit=10";

export const getCats = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};