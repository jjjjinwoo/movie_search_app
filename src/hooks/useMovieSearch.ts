// hooks/useMovieSearch.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Movie, MovieSearchResponse } from '../types/movie';

export const useMovieSearch = (query: string, page: number) => {
  const [data, setData] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setData([]);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get<MovieSearchResponse>('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          query,
          page,
          language: 'ko-KR',
        },
      });

      setTotalPages(res.data.total_pages);

      setData(prev =>
        page === 1 ? res.data.results : [...prev, ...res.data.results]
      );

      setIsLoading(false);
    };

    fetchData();
  }, [query, page]);

  return { data, isLoading, totalPages };
};
