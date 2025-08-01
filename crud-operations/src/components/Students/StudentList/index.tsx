// Libs
import { JSX, useState, useEffect } from "react";

// Components
import { Modal, StudentTableHeader, StudentHeaderTitle, StudentItem, AddStudentForm, EditStudentForm, DeleteStudentForm } from '@components/index';

// Constants
import { STUDENTS_MESSAGES } from "@constants/error-messages";

// Setvices
import { getStudent } from '@services/studentServices';

// Utils
import { handleAxiosError } from "@utils/handle-axios-error";

// Interfaces
import { ModalType } from '@interface/modal-type';
import { IStudent } from "@interface/student";

const StudentList = (): JSX.Element => {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<IStudent>({} as IStudent);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NULL);
  
  // GET all students
  const fetchStudents = async () => {
    try {
      const data = await getStudent();
      setStudents(data || []);
    } catch (error) {
      handleAxiosError(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  
  const handleEditStudent = (selectedStudent: IStudent) => {
    setSelectedStudent(selectedStudent);
    setModalType(ModalType.EDIT);
  }
  
  const handleDeleteStudent = (selectedStudent: IStudent) => {
    setSelectedStudent(selectedStudent);
    setModalType(ModalType.DELETE);
  }
  
  const closeModal = () => setModalType(ModalType.NULL);
  
  return (
    <>
      <StudentTableHeader
        onToggleSort={function (): void {}}
        onAdd={() => setModalType(ModalType.ADD)}
      />
      
      <StudentHeaderTitle />
      
      {students?.length ? (
        <div className="list-students">
          {
            students?.map((item) => (
                <StudentItem
                    key={item.id}
                    selectedStudent= {item}
                    onEditItem={handleEditStudent}
                    onDeleteItem={handleDeleteStudent}
                />
            ))
          }
        </div>
      ) : (
        <p className="student-item not-found">
        {STUDENTS_MESSAGES.NO_DATA}
        </p>
      )}
      
      { modalType === ModalType.ADD &&
        <Modal title="Add New Student" onClose={closeModal}>
          <AddStudentForm onActionSuccess={fetchStudents} onClose={closeModal} />
        </Modal>
      }
      
      { modalType === ModalType.EDIT &&
        <Modal title="Edit Student" onClose={closeModal}>
          <EditStudentForm onActionSuccess={fetchStudents} editingStudent={selectedStudent} onClose={closeModal} />
        </Modal>
      }
      
      { modalType === ModalType.DELETE &&
        <Modal title="Delete Student" onClose={closeModal}>
          <DeleteStudentForm onActionSuccess={fetchStudents} student={selectedStudent} onClose={closeModal} />
        </Modal>
      }
    </>
  );
}

export default StudentList;