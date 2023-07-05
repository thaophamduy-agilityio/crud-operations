import { Input } from '@components/common/Input/index';
import { ChangeEvent } from 'react';

interface SearchProps {
  valueSearch: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ valueSearch, handleSearchChange }: SearchProps) => {
  return (
    <Input
      type="search"
      className="input input-search"
      placeholder="Search books"
      value={valueSearch}
      onChange={handleSearchChange}
    />
  );
};

export default Search;
