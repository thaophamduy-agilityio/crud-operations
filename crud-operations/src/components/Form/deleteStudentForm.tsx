// Libs
import { JSX } from "react";

// Components
import { Text, Button } from "@components/";

// Setvices
import { deleteStudent } from '@services/studentServices';

// Interfaces
interface DeleteStudentFormProps {
    onClose: () => void;
    studentId: string;
    onActionSuccess: () => void;
}

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
            {/* Modal footer */}
            <div className="modal-footer">
                <Button
                    label="Cancel"
                    onClick={onClose}
                    additionalClasses="btn-cancel"
                />
                <Button
                    label="Delete student"
                />
            </div>
        </form>
    )
}

export default DeleteStudentForm;