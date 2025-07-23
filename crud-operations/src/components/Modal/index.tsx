// Libs
import React, { JSX } from 'react';

// Components
import { Text, IconButton } from '@components/';

// Forms
import { AddStudentForm, EditStudentForm, DeleteStudentForm } from '@components/';

// Icons
import { CloseIcon } from '@components/Icon';

// Interfaces
import { ModalType } from '@interface/modalType';
import { IStudent } from "@interface/student";
interface ModalProps {
    onClose: () => void;
    modalType : ModalType;
    editingStudent: IStudent;
    deleteStudentId: string;
    onActionSuccess: () => void;
}
/**
 * Primary UI component for user interaction
 */
const Modal = (
    ({
    onClose,
    modalType,
    editingStudent,
    deleteStudentId,
    onActionSuccess,
    }: ModalProps): JSX.Element => {
        
    let content = null;
    let title = "";
    
    switch (modalType) {
        case ModalType.NEW:
            content = <AddStudentForm onActionSuccess={onActionSuccess} onClose={onClose} />;
            title = "Add New Student";
            break;

            case ModalType.EDIT:
            content = <EditStudentForm onActionSuccess={onActionSuccess} editingStudent={editingStudent} onClose={onClose} />;
            title = "Edit Student";
            break;

            case ModalType.DELETE:
            content = <DeleteStudentForm onActionSuccess={onActionSuccess} deleteStudentId={deleteStudentId} onClose={onClose} />;
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

export default Modal;
