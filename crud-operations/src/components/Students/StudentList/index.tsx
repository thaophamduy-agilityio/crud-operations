// Libs
import { JSX, useState, useEffect } from "react";

// Components
import { Modal, StudentTableHeader, StudentHeaderTitle, StudentItem, AddStudentForm, EditStudentForm, DeleteStudentForm } from '@components/index';

// Constants
import { STUDENTS_MESSAGES } from "@constants/error-messages";

// Setvices
import { getStudent } from '@services/studentServices';

//Interfaces
import { ModalType } from '@interface/modal-type';
import { IStudent } from "@interface/student";

const StudentList = (): JSX.Element => {
    const [students, setStudents] = useState<IStudent[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<IStudent>({} as IStudent);
    const [modalType, setModalType] = useState<ModalType>(null);
    
    // GET all students
    const fetchStudents = async () => {
        const data = await getStudent();
        setStudents(data || []);
    };

    useEffect(() => {
        fetchStudents();
    }, []);
    
    const handleEditStudent = (selectedStudent: IStudent) => {
        setSelectedStudent(selectedStudent);
        setModalType("edit");
    }
    
    const handleDeleteStudent = (selectedStudent: IStudent) => {
        setSelectedStudent(selectedStudent);
        setModalType("delete");
    }
    
    const closeModal = () => setModalType(null);
    
    return (
        <>
            <StudentTableHeader
                onToggleSort={function (): void {}}
                onAdd={() => setModalType("add")}
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
            
            <Modal>
                {modalType === "add" && <AddStudentForm onActionSuccess={fetchStudents} onClose={closeModal} /> }
            </Modal>
            
            <Modal>
                {modalType === "edit" && <EditStudentForm onActionSuccess={fetchStudents} editingStudent={selectedStudent} onClose={closeModal} /> }
            </Modal>
            
            <Modal>
                {modalType === "delete" && <DeleteStudentForm onActionSuccess={fetchStudents} student={selectedStudent} onClose={closeModal} /> }
            </Modal>
        </>
    );
}

export default StudentList;