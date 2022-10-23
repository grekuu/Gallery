import axios from "axios";
import { APIKey } from "./photoApiKey";

export default axios.create({
  baseURL: "https://api.pexels.com/v1/search",
  headers: {
    Authorization: APIKey,
  },
});
