import { Button } from '@components/Button/index';

interface FilterSortProps {
  handleSort: () => void;
  sortOption: {
    title: boolean;
    published: boolean;
  };
}

const FilterSort = ({ handleSort, sortOption }: FilterSortProps) => {
  return (
    <div className="filter-sort">
      <div className="filter-title">Sort By</div>
      <div className="filter-sort-icons">
        <Button
          className={`btn btn-sort ${sortOption.title ? 'selected' : ''}`}
          label="Alphabetical Order"
          onClick={handleSort}
        />
        <Button
          className={`btn btn-sort ${sortOption.published ? 'selected' : ''}`}
          label="Release Year"
          onClick={handleSort}
        />
      </div>
    </div>
  );
};

export default FilterSort;
