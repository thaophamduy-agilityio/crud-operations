// Libs
import type { JSX } from "react";

// Components
import { IconButton } from "@components/index";
import { EditIcon, DeleteIcon } from "@components/Icon";

//Interfaces
import { IStudent } from "@interface/student";
interface StudentProps {
    selectedStudent: IStudent;
    onEditItem: (item: IStudent) => void;
    onDeleteItem: (item: IStudent) => void;
}

const StudentItem = ({ selectedStudent, onEditItem, onDeleteItem }: StudentProps): JSX.Element => {
    const handleEditStudent = () => {
        onEditItem(selectedStudent);
    }
    const handleDeleteStudent = () => {
        onDeleteItem(selectedStudent);
    }
    
    return (
        <li className="student-item">
            <div className="student-item-avatar">
                <img src={selectedStudent.avatar} alt={selectedStudent.firstName} width={65} height={65} />
            </div>
            <div className="student-item-name">{selectedStudent.firstName}</div>
            <div className="student-item-email">{selectedStudent.email}</div>
            <div className="student-item-phone">{selectedStudent.phone}</div>
            <div className="student-item-enroll-number">{selectedStudent.enrollNumber}</div>
            <div className="student-item-date-admission">{selectedStudent.dateAdmission}</div>
            <div className="student-item-edit">
                <IconButton
                    additionalClasses="icon-edit"
                    onClick={handleEditStudent}
                >
                    <EditIcon />
                </IconButton>
            </div>         
            <div className="student-item-delete">
                <IconButton
                    additionalClasses="icon-delete"
                    onClick={handleDeleteStudent}
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </li>
    );
}

export default StudentItem;