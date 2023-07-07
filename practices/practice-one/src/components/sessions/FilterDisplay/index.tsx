import { Button } from '@components/common/Button/index';

interface FilterDisplayProps {
  onDisplay: () => void;
  isDisplayBooks: boolean;
}

const FilterDisplay = ({ onDisplay, isDisplayBooks }: FilterDisplayProps) => {
  return (
    <div className="filter-display">
      <div className="filter-title">Display Options</div>
      <div className="filter-display-icons">
        <Button
          className={`btn btn-display-grid ${isDisplayBooks ? '' : 'selected'}`}
          onClick={onDisplay}
          text="Grid"
        />
        <Button
          className={`btn btn-display-list ${isDisplayBooks ? 'selected' : ''}`}
          onClick={onDisplay}
          text="List"
        />
      </div>
    </div>
  );
};

export default FilterDisplay;
