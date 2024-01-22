import axios from "axios";
import { API } from "@/constants/api/api.constants";
const { API_KEY, BASE_URL } = API;

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get("/trending/movie/day");
  return data;
};

export const getMoviesDetail = async (id: string | undefined) => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getCast = async (id: string | undefined) => {
  const { data } = await instance.get(`/movie/${id}/casts`);

  return data;
};

export const getReviews = async (id: string | undefined) => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};

export const getMovieByName = async (query: string | undefined) => {
  const { data } = await instance.get(`search/movie?query=${query}`);
  return data;
};
