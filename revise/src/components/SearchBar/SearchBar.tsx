import { ChangeEvent } from "react";

interface SearchBarProps {
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ query, onChange}: SearchBarProps) => {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

export default SearchBar