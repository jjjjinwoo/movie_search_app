import axios from 'axios';

export const fetchMovies = async (query: string) => {
  const res = await axios.get(`https://www.omdbapi.com/`, {
    params: {
      apikey: import.meta.env.VITE_OMDB_API_KEY,
      s: query
    }
  });
  return res.data;
};