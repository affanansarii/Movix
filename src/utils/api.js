import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmYxZjQwMjU0OTQ1ODQ3MzUxZjY1YWExOTRlN2I4NyIsInN1YiI6IjY2MzZiZjAzMGMxMjU1MDEyMzdkMDkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fwMTFE5UzuUfJjOEhFMgKJY5b-v3AaLfC85IzOmSqbc";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
