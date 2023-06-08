import { Button } from '@components/Button';
import { memo } from 'react';
import { IBook } from 'src/interface/book';

// Define the props for the Logo component
interface ModalProps {
  closeModal: () => void;
  showModal: boolean;
  loading: 'lazy' | 'eager';
  width: string;
  height: string;
  book: IBook;
}
/**
 * Primary UI component for user interaction
 */
export const Modal = memo(({ closeModal, showModal, loading, width, height, book }: ModalProps) => {
  const { title, description, author, published, Publishers, image } = book;

  // Function to handle close the modal
  const handleCloseModal = (): void => {
    closeModal();
    document.removeEventListener('keydown', handleKeyDown);
  };

  // Function to handle keydown events
  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  // Add event listener for keydown events when the modal is show
  if (showModal) {
    document.addEventListener('keydown', handleKeyDown);
  }

  return showModal ? (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Modal header */}
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          {/* Close button */}
          <Button
            className="btn btn-close"
            label=""
            onClick={() => {
              ('');
            }}
          />
        </div>
        {/* Modal content */}
        <div className="modal-content">
          <figure className="modal-container">
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
            <figcaption>
              <p className="modal-desc">{description}</p>
              <p className="modal-author">{author}</p>
              <p className="modal-published">{published}</p>
              <p className="modal-publishers">{Publishers}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  ) : null;
});
