import { IBook } from '@interface/book';

// Define the props for the Modal Detail component
interface BookDetailProps {
  loading: 'lazy' | 'eager';
  width: string;
  height: string;
  book: Partial<IBook>;
}
/**
 * Primary UI component for user interaction
 */
export const BookDetail = ({
  loading,
  width,
  height,
  book: { title, description, author, published, publishers, image },
}: BookDetailProps) => {
  return (
    <>
      <div className="modal-content">
        <figure className="modal-container-content">
          <div className="modal-container-img">
            <img
              className="img-item"
              loading={loading}
              src={image}
              width={width}
              height={height}
              alt={title}
            />
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
    </>
  );
};
