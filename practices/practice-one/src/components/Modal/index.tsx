import { Button } from '@components/Button';
import { IBook } from 'src/interface/book';

// Define the props for the Logo component
interface ModalProps {
  closeModal: () => void;
  showModal: boolean;
  toggleThemeModal: () => void;
  isThemeModal: boolean;
  loading: string;
  width: string;
  height: string;
  book: IBook;
}
/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  closeModal,
  showModal,
  toggleThemeModal,
  isThemeModal,
  loading,
  width,
  height,
  book,
}: ModalProps) => {
  const { title, description, author, published, publishers, image } = book;

  return showModal ? (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal">
        <div className="modal-container">
          {/* Modal header */}
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            {/* Close button */}
            <Button className="btn btn-close-modal" label="" onClick={closeModal} />
          </div>
          {/* Modal content */}
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
          {/* Modal footer */}
          <div className="modal-footer">
            <div className="modal-escape">
              <span className="modal-escape-btn">ESC</span>
              <span className="modal-escape-text">To Escape</span>
            </div>
            <Button
              className={`${
                isThemeModal ? 'btn btn-sunshine-modal' : 'btn btn-sunshine-modal dark'
              }`}
              label=""
              onClick={toggleThemeModal}
            />
          </div>
        </div>
      </div>
    </>
  ) : null;
};
