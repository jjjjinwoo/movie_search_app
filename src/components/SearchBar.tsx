import { useState } from 'react';

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const [input, setInput] = useState('');
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(input); }}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">검색</button>
    </form>
  );
};

export default SearchBar;