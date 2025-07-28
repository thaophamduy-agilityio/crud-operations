// Libs
import { JSX, useState, useEffect } from "react";

// Components
import { Modal, StudentTableHeader, StudentHeaderTitle, StudentItem } from '@components/';

// Constants
import { STUDENTS_MESSAGES } from "@constants/error-messages";

// Setvices
import { getStudent } from '@services/studentServices';

//Interfaces
import { IStudent } from "@interface/student";
import { ModalType } from '@interface/modalType';

/**
 * Primary UI component for user interaction
 */
const StudentList = (): JSX.Element => {
    const [students, setStudents] = useState<IStudent[]>([]);
    const [editingStudent, setEditingStudent] = useState<IStudent>({} as IStudent);
    const [studentId, setStudentId] = useState<string>('');
    const [modalType, setModalType] = useState<ModalType | null>(null);
    
    // GET all students
    const fetchStudents = async () => {
        const data = await getStudent();
        setStudents(data || []);
    };

    useEffect(() => {
        fetchStudents();
    }, []);
    
    const handleEditStudent = (editingStudent: IStudent) => {
        setEditingStudent(editingStudent);
        setModalType(ModalType.EDIT);
    }
    const handleDeleteStudent = (studentId: string) => {
        setStudentId(studentId);
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
                                student= {item}
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
            {modalType && <Modal modalType={modalType} onActionSuccess={fetchStudents} editingStudent={editingStudent} studentId={studentId} onClose={()=>setModalType(null)} />}
        </>
    );
}

export default StudentList;