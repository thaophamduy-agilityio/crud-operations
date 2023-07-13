import { Button } from '@components/common/Button/index';

interface FilterDisplayProps {
  onDisplayBooks: () => void;
  isDisplayBooks: boolean;
}

const FilterDisplay = ({ onDisplayBooks, isDisplayBooks }: FilterDisplayProps): JSX.Element => {
  return (
    <div className="filter-display">
      <div className="filter-title">Display Options</div>
      <div className="filter-display-icons">
        <Button
          className={`btn btn-display-grid ${isDisplayBooks ? '' : 'selected'}`}
          onClick={onDisplayBooks}
          text="Grid"
        />
        <Button
          className={`btn btn-display-list ${isDisplayBooks ? 'selected' : ''}`}
          onClick={onDisplayBooks}
          text="List"
        />
      </div>
    </div>
  );
};

export default FilterDisplay;
