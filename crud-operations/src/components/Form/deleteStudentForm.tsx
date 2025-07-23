// Libs
import { JSX } from "react";
import axios from "axios";

// Components
import { Button, Text } from "@components/";

// Constants
import { ENPOINT } from '@constants/endpoint';

// Interfaces
interface DeleteStudentFormProps {
    onClose: () => void;
    deleteStudentId: string;
    onActionSuccess: () => void;
}

/**
 * Primary UI component for user interaction
 */
const DeleteStudentForm = ({ onClose, deleteStudentId, onActionSuccess }: DeleteStudentFormProps): JSX.Element => {    
    const handleDeleteStudent = async (id: string) => {        
        await axios.delete(`${ENPOINT.BASE_URL}/students/${id}`);
        onActionSuccess();
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        deleteStudentId !== null && handleDeleteStudent(deleteStudentId);
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