import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
const YOUR_ACCESS_KEY = "UUFtwa-HkEpVUiD29u9gHnt2hbZanw2eefQt1P99Ab4";
export const getImages = async (searchQuery, page) => {
  const data = await axios.get("search/photos/", {
    params: {
      client_id: `${YOUR_ACCESS_KEY}`,
      query: searchQuery,
      per_page: 9,
      page: 1,
    },
  });

  return data.data.results;
};
