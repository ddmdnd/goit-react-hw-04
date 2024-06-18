import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

axios.defaults.baseURL = "https://api.unsplash.com/";
const YOUR_ACCESS_KEY = import.meta.env.VITE_REACT_APP_YOUR_ACCESS_KEY;

// const YOUR_ACCESS_KEY = "UUFtwa-HkEpVUiD29u9gHnt2hbZanw2eefQt1P99Ab4";
export const getImages = async (searchQuery, page) => {
  const data = await axios.get("search/photos/", {
    params: {
      client_id: `${YOUR_ACCESS_KEY}`,
      query: searchQuery,
      per_page: 9,
      page,
    },
  });

  return data.data.results;
};
