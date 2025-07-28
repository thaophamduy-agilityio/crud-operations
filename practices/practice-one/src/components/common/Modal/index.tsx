import { Icon } from '@components/common/Icon';
import { ReactNode, memo } from 'react';

// Define the props for the Modal component
interface ModalProps {
  onCloseModal: () => void;
  isShowModal: boolean;
  onToggleThemeModal: () => void;
  isDarkTheme: boolean;
  title: string;
  children: ReactNode;
}
/**
 * Primary UI component for user interaction
 */
export const Modal = memo(
  ({
    onCloseModal,
    isShowModal,
    onToggleThemeModal,
    isDarkTheme,
    title,
    children,
  }: ModalProps): JSX.Element | null => {
    return isShowModal ? (
      <>
        <div className="modal-overlay" onClick={onCloseModal}></div>
        <div className={`modal ${isDarkTheme ? '' : 'dark-theme'}`}>
          <div className="modal-container">
            {/* Modal header */}
            <div className="modal-header">
              <h2 className="modal-title">{title}</h2>
              {/* Close button */}
              <Icon
                className="icon icon-close-modal"
                aria-label="Close Modal"
                onClick={onCloseModal}
              />
            </div>
            {/* Modal content */}
            {children}
            {/* Modal footer */}
            <div className="modal-footer">
              <div className="modal-escape">
                <span className="modal-escape-btn">ESC</span>
                <span className="modal-escape-text">To Escape</span>
              </div>
              <Icon
                className={`icon icon-sunshine-modal ${isDarkTheme ? '' : 'dark'}`}
                onClick={onToggleThemeModal}
                aria-label="Change Modal Dark Theme"
              />
            </div>
          </div>
        </div>
      </>
    ) : null;
  }
);
