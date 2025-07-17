// Libs
import { JSX, ReactNode } from 'react';

// Components
import { Text } from '@components/Text';
import { IconButton } from '@components/IconButton';

// Icons
import { CloseIcon } from '@components/Icon';
import { Button } from '@components/Button';

// Interfaces
interface ModalProps {
  onCloseModal: () => void;
  onHandle: () => void;
  title: string;
  children: ReactNode;
  buttonLabel: string;
}
/**
 * Primary UI component for user interaction
 */
export const Modal = (
    ({
    onCloseModal,
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
                        onClick={onCloseModal}
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
                        onClick={onCloseModal}
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
