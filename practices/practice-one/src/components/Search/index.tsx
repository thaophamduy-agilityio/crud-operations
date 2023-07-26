import { Input } from '@components/common/Input';
import { ChangeEvent } from 'react';

interface SearchProps {
  valueSearch: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ valueSearch, onSearchChange }: SearchProps): JSX.Element => {
  return (
    <Input
      type="search"
      className="input input-search"
      placeholder="Search books"
      value={valueSearch}
      onChange={onSearchChange}
    />
  );
};

export default Search;
