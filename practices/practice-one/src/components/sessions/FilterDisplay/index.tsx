import { Button } from '@components/common/Button/index';

interface FilterDisplayProps {
  onDisplay: () => void;
  displayOption: boolean;
}

const FilterDisplay = ({ onDisplay, displayOption }: FilterDisplayProps) => {
  return (
    <div className="filter-display">
      <div className="filter-title">Display Options</div>
      <div className="filter-display-icons">
        <Button
          className={`btn btn-display-grid ${displayOption ? '' : 'selected'}`}
          onClick={onDisplay}
          text="Grid"
        />
        <Button
          className={`btn btn-display-list ${displayOption ? 'selected' : ''}`}
          onClick={onDisplay}
          text="List"
        />
      </div>
    </div>
  );
};

export default FilterDisplay;
