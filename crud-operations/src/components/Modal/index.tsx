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
                    <h2 className="modal-title">{title}</h2>
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
                    {children}
                {/* Modal footer */}
                <div className="modal-footer">
                    <Button
                        label={buttonLabel}
                        onClick={onHandle}
                    />
                    <Button
                        label="Cancel"
                        onClick={onCloseModal}
                    />
                </div>
            </div>
        </div>
    </>
))
