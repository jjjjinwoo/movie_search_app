export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  vote_average: string | null;
}

export interface MovieSearchResponse {
  results: Movie[];
  total_results: number;
  total_pages: number;
}