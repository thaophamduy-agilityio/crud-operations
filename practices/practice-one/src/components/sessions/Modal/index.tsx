import { Button } from '@components/common/Button/index';
import { IBook } from '@interface/book';
import { DetailModal } from './DetailModal';

// Define the props for the Modal component
interface ModalProps {
  closeModal: () => void;
  showModal: boolean;
  toggleThemeModal: () => void;
  isThemeModal: boolean;
  loading: 'lazy' | 'eager';
  width: string;
  height: string;
  book: Partial<IBook>;
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
  return showModal ? (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className={`${isThemeModal ? 'modal' : 'modal dark-theme'}`}>
        <div className="modal-container">
          {/* Modal header */}
          <div className="modal-header">
            <h2 className="modal-title">{book.title}</h2>
            {/* Close button */}
            <Button className="btn btn-close-modal" label="" onClick={closeModal} />
          </div>
          {/* Modal content */}
          <DetailModal
            isThemeModal={isThemeModal}
            loading={loading}
            width={width}
            height={height}
            book={book}
          />
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
