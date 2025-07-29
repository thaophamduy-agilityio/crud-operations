// Libs
import { JSX } from 'react';

// Components
import { Text, IconButton, AddStudentForm, EditStudentForm, DeleteStudentForm } from '@components/index';

// Icons
import { CloseIcon } from '@components/Icon';

// Interfaces
import { ModalType } from '@interface/modalType';
import { IStudent } from "@interface/student";
interface ModalFormProps {
    modalType : ModalType;
    selectedStudent: IStudent;
    onClose: () => void;
    onActionSuccess: () => void;
}

const ModalForm = (
    ({
    onClose,
    modalType,
    selectedStudent,
    onActionSuccess,
    }: ModalFormProps): JSX.Element => {
        
    let content = null;
    let title = "";
    
    switch (modalType) {
        case ModalType.NEW:
            content = <AddStudentForm onActionSuccess={onActionSuccess} onClose={onClose} />;
            title = "Add New Student";
            break;

            case ModalType.EDIT:
            content = <EditStudentForm onActionSuccess={onActionSuccess} editingStudent={selectedStudent} onClose={onClose} />;
            title = "Edit Student";
            break;

            case ModalType.DELETE:
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

export default ModalForm;
