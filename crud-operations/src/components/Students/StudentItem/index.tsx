// Libs
import type { JSX } from "react";

// Components
import { IconButton } from "@components/";
import { EditIcon, DeleteIcon } from "@components/Icon";

//Interfaces
import { IStudent } from "@interface/student";
interface StudentProps {
    student: IStudent;
    onEditItem: (item: IStudent) => void;
    onDeleteItem: (id: string) => void;
}

/**
 * Primary UI component for user interaction
 */
const StudentItem = ({ student, onEditItem, onDeleteItem }: StudentProps): JSX.Element => {
    const handleEditStudent = () => {
        onEditItem(student);
    }
    const handleDeleteStudent = () => {
        onDeleteItem(student.id);
    }
    
    return (
        <li className="student-item">
            <div className="student-item-avatar">
                <img src={student.avatar} alt={student.firstName} width={65} height={65} />
            </div>
            <div className="student-item-name">{student.firstName}</div>
            <div className="student-item-email">{student.email}</div>
            <div className="student-item-phone">{student.phone}</div>
            <div className="student-item-enroll-number">{student.enrollNumber}</div>
            <div className="student-item-date-admission">{student.dateAdmission}</div>
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