// Libs
import { JSX, PropsWithChildren } from 'react';

// Components
import { Text, IconButton } from "@components/index";

// Icons
import { CloseIcon } from "@components/Icon";

// Interfaces
interface ModalProps extends PropsWithChildren {
  title: string;
  onClose: () => void;
};

const Modal = (({title, onClose, children}: ModalProps): JSX.Element => {
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal">
        <div className="modal-container">
          {/* Modal header */}
          <div className="modal-header">
            <Text
              type="h2"
              size="lg"
              additionalClasses="modal-title"
            >
              {title}
            </Text>
            {/* Close button */}
            <IconButton
              onClick={onClose}
              additionalClasses="icon"
            >
              <CloseIcon />
            </IconButton>
          </div>
          {children}
        </div>
      </div>
    </>
  );
});

export default Modal;