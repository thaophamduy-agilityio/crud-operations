// Libs
import { JSX } from "react";

// Components
import { Text } from "@components/";

// Setvices
import { deleteStudent } from '@services/studentServices';

// Interfaces
interface DeleteStudentFormProps {
    onClose: () => void;
    studentId: string;
    onActionSuccess: () => void;
}

/**
 * Primary UI component for user interaction
 */
const DeleteStudentForm = ({ onClose, studentId, onActionSuccess }: DeleteStudentFormProps): JSX.Element => {    
    const handleDeleteStudent = async (id: string) => {        
        await deleteStudent(id);
        onActionSuccess();
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        studentId !== null && handleDeleteStudent(studentId);
        onClose();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <Text
                type="p"
            >
                Do you want to delete this student?
            </Text>
        </form>
    )
}

export default DeleteStudentForm;