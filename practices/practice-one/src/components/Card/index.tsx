import { IBook } from '@interface/book';
import { Image } from '@components/common/Image';

// Define the props for the Card component
interface CardProps {
  loading: 'lazy' | 'eager';
  width: number;
  viewBook: string;
  book: Partial<IBook>;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  loading,
  width,
  viewBook,
  book,
  onClick,
}: CardProps): JSX.Element | undefined => {
  const { title, description, author, published, publishers, imageSmall, imageMedium } = book;

  if (viewBook === 'item') {
    return (
      <div onClick={onClick}>
        <figure className="card-container">
          <div className="card-container-img">
            <picture>
              <source className="img-item" srcSet={imageMedium} media="(min-width: 768px)" />
              <Image loading={loading} imageSrc={imageSmall} width={width} altText={title} />
            </picture>
          </div>
          <figcaption>
            <h2 className="card-title">{title}</h2>
            <p className="card-author">{author}</p>
            <p className="card-published">{published}</p>
          </figcaption>
        </figure>
      </div>
    );
  }

  if (viewBook === 'detail') {
    return (
      <div className="modal-content">
        <figure className="modal-container-content">
          <div className="modal-container-img">
            <picture>
              <source className="img-item" srcSet={imageMedium} media="(min-width: 768px)" />
              <Image loading={loading} imageSrc={imageSmall} width={width} altText={title} />
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
  }
};
