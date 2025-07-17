// Libs
import type { JSX } from "react";

// Components
import { Modal } from ".";
import { Text } from '@components/Text';

// Interfaces
interface DeleteStudentModalProps {
    onCancel: () => void;
    onDelete: (id: number) => void;
}

/**
 * Primary UI component for user interaction
 */
export const DeleteStudentModal = ({ onDelete, onCancel }: DeleteStudentModalProps): JSX.Element => {
    return (
        <Modal
            onCloseModal={onCancel}
            onHandle={() => onDelete}
            title="Delete Student"
            buttonLabel="Delete Student"
        >
            <Text
                type="p"
            >
                Do you want to delete this student?
            </Text>
        </Modal>
    );
}