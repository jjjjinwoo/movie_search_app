import { useState } from 'react';

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const [input, setInput] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(input);
      }}
      className="flex w-full gap-2"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="영화 제목을 검색하세요"
        className="flex-1 px-4 py-2 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        검색
      </button>
    </form>
  );
};

export default SearchBar;
