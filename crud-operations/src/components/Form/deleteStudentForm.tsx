// Libs
import { JSX } from "react";

// Components
import { Text, Button } from "@components/";

// Setvices
import { deleteStudent } from '@services/studentServices';

// Interfaces
import { IStudent } from "@interface/student";
interface DeleteStudentFormProps {
    onClose: () => void;
    student: IStudent;
    onActionSuccess: () => void;
}

const DeleteStudentForm = ({ onClose, student, onActionSuccess }: DeleteStudentFormProps): JSX.Element => {    
    const handleDeleteStudent = async (student: IStudent) => {        
        await deleteStudent(student.id);
        onActionSuccess();
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        student !== null && handleDeleteStudent(student);
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