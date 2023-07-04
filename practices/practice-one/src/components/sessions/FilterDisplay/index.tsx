import { Button } from '@components/common/Button/index';

interface FilterDisplayProps {
  displayOption: boolean;
  handleDisplay: () => void;
}

const FilterDisplay = ({ displayOption, handleDisplay }: FilterDisplayProps) => {
  return (
    <div className="filter-display">
      <div className="filter-title">Display Options</div>
      <div className="filter-display-icons">
        <Button
          className={`btn btn-display-grid ${displayOption ? '' : 'selected'}`}
          onClick={handleDisplay}
          text="Grid"
        />
        <Button
          className={`btn btn-display-list ${displayOption ? 'selected' : ''}`}
          onClick={handleDisplay}
          text="List"
        />
      </div>
    </div>
  );
};

export default FilterDisplay;
