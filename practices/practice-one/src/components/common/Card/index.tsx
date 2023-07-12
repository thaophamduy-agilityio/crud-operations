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
}: CardProps) => {
  const {
    title = 'Angels and demons',
    author = 'Stuart Matt',
    published = '2021',
    image = 'https://picsum.photos/200/200',
  } = book;

  return (
    <div onClick={onClick}>
      <figure className="card-container">
        <div className="card-container-img">
          <img
            className="img-item"
            loading={loading}
            src={image}
            width={width}
            height={height}
            alt={title}
          />
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
