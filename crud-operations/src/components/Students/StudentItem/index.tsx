// Libs
import type { JSX } from "react";

// Components
import { IconButton } from "@components/index";
import { EditIcon, DeleteIcon } from "@components/Icon";

// Interfaces
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
      <figure className="student-item-avatar">
        <img src={selectedStudent.avatar} alt={selectedStudent.firstName} width={65} height={65} />
      </figure>
      
      <h3 className="student-item-name">{selectedStudent.firstName}</h3>
      
      <p className="student-item-email">{selectedStudent.email}</p>
      
      <span className="student-item-phone">{selectedStudent.phone}</span>
      
      <span className="student-item-enroll-number">{selectedStudent.enrollNumber}</span>
      
      <p className="student-item-date-admission">{selectedStudent.dateAdmission}</p>
      
      <IconButton
        additionalClasses="student-item-edit icon-edit"
        onClick={handleEditStudent}
      >
        <EditIcon />
      </IconButton>
      
      <IconButton
        additionalClasses="student-item-delete icon-delete"
        onClick={handleDeleteStudent}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

export default StudentItem;