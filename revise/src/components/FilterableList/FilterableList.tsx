// Libs
import { useState, ChangeEvent } from "react";

// Components
import { SearchBar, ListItems, FilterItems } from "@components/";

// Constant
import { foods } from "@constants/";

const FilterableList = () => {
  const [query, setQuery] = useState('');
  const results = FilterItems(foods, query);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar
        query={query}
        onChange={handleTextChange}
      />
      <hr />
      <ListItems items={results} />
    </>
  );
}

export default FilterableList