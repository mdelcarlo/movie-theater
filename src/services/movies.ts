import axios from "axios";
import { keysToCamel } from "../utils/snakeToCamel";
const API_KEY = "6b9749612c08bc2bbc0ffe11356b8d69"; // this shouldn't be commited, I live it here so you can test the application using mine

export default API_KEY;
// https://api.themoviedb.org/3/discover/movie?api_key=6b9749612c08bc2bbc0ffe11356b8d69&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

const discoverMovies = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: API_KEY,
          language: "en-US",
          sort_by: "popularity.desc",
          include_adult: false,
          include_video: false,
          page: 1,
          with_watch_monetization_types: "flatrate",
        },
      }
    );
    return keysToCamel(data.results);
  } catch (error) {
    console.error(error);
  }
};

const searchMoviesByTitle = async (title: string) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: API_KEY,
          language: "en-US",
          sort_by: "popularity.desc",
          include_adult: false,
          include_video: false,
          page: 1,
          query: title,
        },
      }
    );
    return keysToCamel(data.results);
  } catch (error) {
    console.error(error);
  }
};

const getMovieById = async (id: number) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return keysToCamel(data);
  } catch (error) {
    console.error(error);
  }
};

const getMovieThumbnail = async (path = "") => {
  try {
    const { data } = await axios.get(
      `https://image.tmdb.org/t/p/w300/${path}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return keysToCamel(data);
  } catch (error) {
    console.error(error);
  }
};

const getMovieImage = async (path = "") => {
  try {
    const { data } = await axios.get(
      `https://image.tmdb.org/t/p/original/${path}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return keysToCamel(data);
  } catch (error) {
    console.error(error);
  }
};

export {
  discoverMovies,
  searchMoviesByTitle,
  getMovieById,
  getMovieImage,
  getMovieThumbnail,
};
