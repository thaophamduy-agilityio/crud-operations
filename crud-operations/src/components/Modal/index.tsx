// Libs
import { JSX, ReactNode } from 'react';

// Components
import { Text, Button, IconButton } from '@components/';

// Icons
import { CloseIcon } from '@components/Icon';

// Interfaces
interface ModalProps {
    onClose: () => void;
    onHandle: () => void;
    title: string;
    children: ReactNode;
    buttonLabel: string;
}
/**
 * Primary UI component for user interaction
 */
const Modal = (
    ({
    onClose,
    onHandle,
    title,
    children,
    buttonLabel,
    }: ModalProps): JSX.Element => (
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
                {/* Modal content */}
                <div className="modal-content">
                    {children}
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                    <Button
                        label="Cancel"
                        onClick={onClose}
                        additionalClasses="btn-cancel"
                    />
                    <Button
                        label={buttonLabel}
                        onClick={onHandle}
                    />
                </div>
            </div>
        </div>
    </>
))

export default Modal;
