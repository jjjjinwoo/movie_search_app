import axios from 'axios';
import type { MovieSearchResponse } from '../types/movie';

export const fetchMovies = async (query: string): Promise<MovieSearchResponse> => {
  const res = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      query,
      language: 'ko-KR',
    }
  });
  return res.data;
};