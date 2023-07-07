import { Button } from '@components/common/Button/index';

interface FilterSortProps {
  onSortBooks: () => void;
  sortOption: {
    title: boolean;
    published: boolean;
  };
}

const FilterSort = ({ onSortBooks, sortOption }: FilterSortProps) => {
  return (
    <div className="filter-sort">
      <div className="filter-title">Sort By</div>
      <div className="filter-sort-icons">
        <Button
          className={`btn btn-sort ${sortOption.title ? 'selected' : ''}`}
          label="Alphabetical Order"
          onClick={onSortBooks}
        />
        <Button
          className={`btn btn-sort ${sortOption.published ? 'selected' : ''}`}
          label="Release Year"
          onClick={onSortBooks}
        />
      </div>
    </div>
  );
};

export default FilterSort;
