// Libs
import { JSX } from "react";

// Components
import { Text, Button, IconButton } from "@components/index";

// Icons
import { CloseIcon } from "@components/Icon";

// Setvices
import { deleteStudent } from '@services/studentServices';

// Interfaces
import { IStudent } from "@interface/student";
interface DeleteStudentFormProps {
    student: IStudent;
    onClose: () => void;
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
                            Delete Student
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteStudentForm;