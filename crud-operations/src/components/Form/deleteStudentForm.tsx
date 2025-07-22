// Libs
import { JSX } from "react";

// Components
import { Button, Text } from "@components/";

// Interfaces
interface DeleteStudentFormProps {
    onClose: () => void;
    id: number;
}

/**
 * Primary UI component for user interaction
 */
const DeleteStudentForm = ({ onClose, id }: DeleteStudentFormProps): JSX.Element => {
    
    const handleDeleteStudent = (id) => {
        // TODO: integrate API
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleDeleteStudent(id);
        onClose();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <Text
                type="p"
            >
                Do you want to delete this student?
            </Text>
            {/* Modal footer */}
            <div className="modal-footer">
                <Button
                    label="Cancel"
                    onClick={onClose}
                    additionalClasses="btn-cancel"
                />
                <Button
                    label='Delete Student'
                />
            </div>
        </form>
    )
}

export default DeleteStudentForm;