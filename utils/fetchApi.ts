import axios from "axios";

const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, {
    headers: {
      "X-RapidAPI-Key": "64b51b23b5mshde8fc756315185fp1d8bc7jsne39a1eb34530",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
