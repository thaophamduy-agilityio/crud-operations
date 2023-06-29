import { IBook } from '@interface/book';

// Define the props for the Modal Detail component
interface DetailModalProps {
  isThemeModal: boolean;
  loading: 'lazy' | 'eager';
  width: string;
  height: string;
  book: Partial<IBook>;
}
/**
 * Primary UI component for user interaction
 */
export const DetailModal = ({
  isThemeModal,
  loading,
  width,
  height,
  book: { title, description, author, published, publishers, image },
}: DetailModalProps) => {
  return (
    <>
      <div className={`${isThemeModal ? 'modal-content' : 'modal-content dark-theme'}`}>
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
