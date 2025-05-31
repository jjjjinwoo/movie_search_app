import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../api/movies';

export const useMovieSearch = (query: string) => {
  return useQuery({
    queryKey: ['movies', query],
    queryFn: () => fetchMovies(query),
    enabled: !!query,
  });
};