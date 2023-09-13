import { Image } from 'src/components/common/Image';
import arrow from 'src/assets/images/arrow-right.svg';
import { memo } from 'react';

interface BreadCrumbProps {
  selectedCategory: string;
  total: number | undefined;
}

const BreadCrumb = ({ selectedCategory, total = 0 }: BreadCrumbProps): JSX.Element => {
  return (
    <div className="book-title">
      <span className="book-title-text">{selectedCategory || 'All Books'}</span>
      <span className="book-title-arrow">
        <Image altText="arrow" imageSrc={arrow} loading="lazy" width={22} />
      </span>
      <span className="book-title-results">
        Showing {total} Result{total > 1 ? 's' : ''}
      </span>
    </div>
  );
};

export default memo(BreadCrumb);
