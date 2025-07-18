// Libs
import type { JSX } from "react";

// Components
import { Modal, Text } from "components/";

// Interfaces
interface DeleteStudentModalProps {
    onClose: () => void;
    onDelete: (id: number) => void;
}

/**
 * Primary UI component for user interaction
 */
const DeleteStudentModal = ({ onDelete, onClose }: DeleteStudentModalProps): JSX.Element => {
    return (
        <Modal
            onClose={onClose}
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

export default DeleteStudentModal;