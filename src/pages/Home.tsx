import { useState } from 'react';
import { useMovieSearch } from '../hooks/useMovieSearch';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [query, setQuery] = useState('');
  const { data, isLoading } = useMovieSearch(query);

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      {isLoading && <p>로딩 중...</p>}
      {data?.Search?.map((movie) => (
        <div key={movie.imdbID}>{movie.Title}</div>
      ))}
    </div>
  );
}