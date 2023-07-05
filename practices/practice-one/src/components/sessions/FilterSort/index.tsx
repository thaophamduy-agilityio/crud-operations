import { Button } from '@components/common/Button/index';

interface FilterSortProps {
  onSort: () => void;
  sortOption: {
    title: boolean;
    published: boolean;
  };
}

const FilterSort = ({ onSort, sortOption }: FilterSortProps) => {
  return (
    <div className="filter-sort">
      <div className="filter-title">Sort By</div>
      <div className="filter-sort-icons">
        <Button
          className={`btn btn-sort ${sortOption.title ? 'selected' : ''}`}
          label="Alphabetical Order"
          onClick={onSort}
        />
        <Button
          className={`btn btn-sort ${sortOption.published ? 'selected' : ''}`}
          label="Release Year"
          onClick={onSort}
        />
      </div>
    </div>
  );
};

export default FilterSort;
