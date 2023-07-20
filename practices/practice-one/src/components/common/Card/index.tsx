import { IBook } from '@interface/book';

// Define the props for the Card component
interface CardProps {
  loading: 'lazy' | 'eager';
  width: string;
  height: string;

  book: Partial<IBook>;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  loading = 'lazy',
  width = '200',
  height = '200',
  book,
  onClick,
}: CardProps): JSX.Element => {
  const {
    title = 'Angels and demons',
    author = 'Stuart Matt',
    published = '2021',
    imageSmall = 'https://picsum.photos/200/200',
    imageMedium = 'https://picsum.photos/400/400',
  } = book;

  return (
    <div onClick={onClick}>
      <figure className="card-container">
        <div className="card-container-img">
          <picture>
            <source className="img-item" srcSet={imageMedium} media="(min-width: 768px)" />
            <img
              className="img-item"
              loading={loading}
              src={imageSmall}
              width={width}
              height={height}
              alt={title}
            />
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
