import { useEffect, useState } from 'react';
import { useMovieSearch } from '../hooks/useMovieSearch';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieDetail from '../components/MovieDetail';
import type { Movie } from '../types/movie';

export default function Home() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, isLoading, totalPages } = useMovieSearch(query, page);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1); // 새 검색 시 페이지 초기화
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    console.log('data',data)
  },[data])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8">
      <div className="w-full">
        <SearchBar onSearch={handleSearch} />

        {isLoading && page === 1 && (
          <p className="text-center mt-4">로딩 중...</p>
        )}

        <div className="grid grid-cols-2 gap-4 mt-6">
          {data.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)} />
          ))}
        </div>

        {page < totalPages && (
          <div className="text-center mt-6">
            <button
              onClick={loadMore}
              className="px-6 py-2 rounded-xl border border-white hover:bg-white hover:text-black transition"
            >
              더보기
            </button>
          </div>
        )}
      </div>

      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}
