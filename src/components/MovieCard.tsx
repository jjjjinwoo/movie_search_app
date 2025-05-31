import type { Movie } from '../types/movie';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

type Props = {
  movie: Movie;
  onClick?: () => void;
};

export default function MovieCard({ movie, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-zinc-800 rounded-lg overflow-hidden shadow-md cursor-pointer hover:brightness-110 transition"
    >
      {movie.poster_path ? (
        <img
          src={`${IMAGE_BASE}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto"
        />
      ) : (
        <div className="w-full h-[300px] bg-zinc-700 flex items-center justify-center text-sm">
          No Image
        </div>
      )}
      <div className="p-2">
        <h3 className="text-base font-semibold truncate">{movie.title}</h3>
        <p className="text-sm text-red-400">{movie.release_date}</p>
      </div>
    </div>
  );
}