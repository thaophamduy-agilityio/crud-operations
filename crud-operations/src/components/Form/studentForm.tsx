// Libs
import { JSX } from 'react';

// Components
import { Text, IconButton, AddStudentForm, EditStudentForm, DeleteStudentForm } from '@components/index';

// Icons
import { CloseIcon } from '@components/Icon';

// Interfaces
import { FormType } from '@interface/form-type';
import { IStudent } from "@interface/student";
interface StudentFormProps {
    formType : FormType;
    selectedStudent: IStudent;
    onClose: () => void;
    onActionSuccess: () => void;
}

const StudentForm = (
    ({
    onClose,
    formType,
    selectedStudent,
    onActionSuccess,
    }: StudentFormProps): JSX.Element => {
        
    let content = null;
    let title = "";
    
    switch (formType) {
        case FormType.NEW:
            content = <AddStudentForm onActionSuccess={onActionSuccess} onClose={onClose} />;
            title = "Add New Student";
            break;

            case FormType.EDIT:
            content = <EditStudentForm onActionSuccess={onActionSuccess} editingStudent={selectedStudent} onClose={onClose} />;
            title = "Edit Student";
            break;

            case FormType.DELETE:
            content = <DeleteStudentForm onActionSuccess={onActionSuccess} student={selectedStudent} onClose={onClose} />;
            title = "Delete Student";
            break;

        default:
            break;
    }
    
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
                            {title}
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
                        {content}
                    </div>
                </div>
            </div>
        </>
    );
})

export default StudentForm;
