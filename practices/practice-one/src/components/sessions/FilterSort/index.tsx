import { Button } from '@components/common/Button/index';

interface FilterSortProps {
  onSortBooks: () => void;
  sortOption: {
    title: boolean;
    published: boolean;
  };
}

const FilterSort = ({ onSortBooks, sortOption }: FilterSortProps) => {
  const { title, published } = sortOption || {};

  return (
    <div className="filter-sort">
      <div className="filter-title">Sort By</div>
      <div className="filter-sort-icons">
        <Button
          className={`btn btn-sort ${title ? 'selected' : ''}`}
          label="Alphabetical Order"
          onClick={onSortBooks}
        />
        <Button
          className={`btn btn-sort ${published ? 'selected' : ''}`}
          label="Release Year"
          onClick={onSortBooks}
        />
      </div>
    </div>
  );
};

export default FilterSort;
