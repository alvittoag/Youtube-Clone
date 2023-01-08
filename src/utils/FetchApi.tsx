import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "286b83264cmsh7a7cf5556382ab7p1eaca6jsn23688fe2226d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    useQueryString: true,
  },
};

export const FetchApi = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
