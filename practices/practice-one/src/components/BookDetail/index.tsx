import { IBook } from '@interface/book';
import { Image } from 'src/components/common/Image';
import { memo } from 'react';

// Define the props for the Modal Detail book
interface BookDetailProps {
  width: number;
  book: IBook;
}

const BookDetail = ({
  width,
  book: { title, description, author, published, publishers, imageSmall, imageMedium },
}: BookDetailProps): JSX.Element => {
  return (
    <div className="modal-content">
      <figure className="modal-container-content">
        <div className="modal-container-img">
          <picture>
            <source className="img-item" srcSet={imageMedium} media="(min-width: 768px)" />
            <Image loading="lazy" imageSrc={imageSmall} width={width} altText={title} />
          </picture>
        </div>
        <figcaption className="modal-container-text">
          <p className="modal-desc">{description}</p>
          <p className="modal-author">
            <span className="modal-container-text-title">Author:</span>
            <span className="modal-container-text-content">{author}</span>
          </p>
          <p className="modal-published">
            <span className="modal-container-text-title">Published:</span>
            <span className="modal-container-text-content">{published}</span>
          </p>
          <p className="modal-publishers">
            <span className="modal-container-text-title">Publishers:</span>
            <span className="modal-container-text-content">{publishers}</span>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default memo(BookDetail);
