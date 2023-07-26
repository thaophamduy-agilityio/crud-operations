import { IBook } from '@interface/book';
import { Image } from '@components/common/Image';

// Define the props for the Card component
interface CardProps {
  loading: 'lazy' | 'eager';
  width: number;
  book: Partial<IBook>;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({ loading, width, book, onClick }: CardProps): JSX.Element => {
  const { title, author, published, imageSmall, imageMedium } = book;

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
};
