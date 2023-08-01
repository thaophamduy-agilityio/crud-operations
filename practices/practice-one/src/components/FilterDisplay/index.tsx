import { Icon } from '@components/common/Icon';
import { memo } from 'react';

interface FilterDisplayProps {
  onDisplayBooks: () => void;
  isDisplayBooks: boolean;
}

const FilterDisplay = ({ onDisplayBooks, isDisplayBooks }: FilterDisplayProps): JSX.Element => {
  return (
    <div className="filter-display">
      <div className="filter-title">Display Options</div>
      <div className="filter-display-icons">
        <div className="icon-container">
          <Icon
            className={`icon icon-display-grid ${isDisplayBooks ? '' : 'selected'}`}
            onClick={onDisplayBooks}
            aria-label="Display Grid"
          />
          <p className="display-option">Grid</p>
        </div>
        <div className="icon-container">
          <Icon
            className={`icon icon-display-list ${isDisplayBooks ? 'selected' : ''}`}
            onClick={onDisplayBooks}
            aria-label="Display List"
          />
          <p className="display-option">List</p>
        </div>
      </div>
    </div>
  );
};

export default memo(FilterDisplay);
