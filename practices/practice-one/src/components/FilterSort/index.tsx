import { Button } from '@components/common/Button';
import { memo } from 'react';

interface FilterSortProps {
  onSortBooks: () => void;
  sortOption: {
    isSortByAlphabet: boolean;
    isSortByYear: boolean;
  };
}

const FilterSort = ({ onSortBooks, sortOption }: FilterSortProps): JSX.Element => {
  const { isSortByAlphabet, isSortByYear } = sortOption;

  return (
    <div className="filter-sort">
      <div className="filter-title">Sort By</div>
      <div className="filter-sort-icons">
        <Button
          className={`btn-sort ${isSortByAlphabet ? 'selected' : ''}`}
          label="Alphabetical Order"
          aria-label="Sort By Alphabet"
          onClick={onSortBooks}
        />
        <Button
          className={`btn-sort ${isSortByYear ? 'selected' : ''}`}
          label="Release Year"
          aria-label="Sort By Year"
          onClick={onSortBooks}
        />
      </div>
    </div>
  );
};

export default memo(FilterSort);
