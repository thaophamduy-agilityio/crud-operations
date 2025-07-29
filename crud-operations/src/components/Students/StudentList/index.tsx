// Libs
import { JSX, useState, useEffect } from "react";

// Components
import { Modal, StudentTableHeader, StudentHeaderTitle, StudentItem } from '@components/index';

// Constants
import { STUDENTS_MESSAGES } from "@constants/error-messages";

// Setvices
import { getStudent } from '@services/studentServices';

//Interfaces
import { IStudent } from "@interface/student";
import { ModalType } from '@interface/modalType';

const StudentList = (): JSX.Element => {
    const [students, setStudents] = useState<IStudent[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<IStudent>({} as IStudent);
    const [modalType, setModalType] = useState<ModalType | null>(null);
    
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
        setModalType(ModalType.EDIT);
    }
    const handleDeleteStudent = (selectedStudent: IStudent) => {
        setSelectedStudent(selectedStudent);
        setModalType(ModalType.DELETE);
    }
    return (
        <>
            <StudentTableHeader
                onToggleSort={function (): void {}}
                onAdd={()=>setModalType(ModalType.NEW)}
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
            {modalType && <Modal modalType={modalType} onActionSuccess={fetchStudents} selectedStudent={selectedStudent} onClose={()=>setModalType(null)} />}
        </>
    );
}

export default StudentList;