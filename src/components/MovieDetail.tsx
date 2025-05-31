import type { Movie } from '../types/movie';

type Props = {
  movie: Movie;
  onClose: () => void;
};

export default function MovieDetail({ movie, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 text-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className="text-sm text-gray-400 mb-2">{movie.release_date}</p>
        <p className="mb-2">⭐ 평점: {movie.vote_average}</p>
        <p className="text-sm leading-relaxed">{movie.overview || '줄거리 정보가 없습니다.'}</p>
      </div>
    </div>
  );
}