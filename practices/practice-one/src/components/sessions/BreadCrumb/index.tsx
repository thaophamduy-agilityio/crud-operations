import { Image } from '@components/common/Image/index';
import arrow from '@image/arrow-right.svg';

interface BreadCrumbProps {
  selectedCategory: string;
  total: number | undefined;
}

const BreadCrumb = ({ selectedCategory, total }: BreadCrumbProps) => {
  return (
    <div className="book-title">
      <span className="book-title-text">{selectedCategory || 'All Books'}</span>
      <span className="book-title-arrow">
        <Image altText="arrow" height="8" imageSrc={arrow} loading="lazy" width="22" />
      </span>
      <span className="book-title-results">Showing {total} Result(s)</span>
    </div>
  );
};

export default BreadCrumb;
