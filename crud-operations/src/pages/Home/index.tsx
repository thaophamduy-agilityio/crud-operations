// Libs
import { useState } from 'react';
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { ErrorFallback, IconButton, Logo, StudentInfo, Header, MenuBar, StudentList, HeaderTable, Modal } from '@components/';

// Icons
import { LogoutIcon } from '@components/Icon';

// Mocks
import { studentsList, menuBarList } from '@mocks/index';

// Interfaces
import { ModalType } from '@interface/modalType';
import { IStudent } from '@interface/student';

const Home = () => {
    const [students, setStudents] = useState<IStudent[]>([]);
    const [editingStudent, setEditingStudent] = useState<IStudent>({} as IStudent);
    const [modalType, setModalType] = useState<ModalType | null>(null);
    
    /**
    * Handle add a student to student list
    * @param {function} handleAddStudent
    */
    const handleAddStudent = (student: Omit<IStudent, 'id'> | IStudent) => {
        setStudents([...students, { ...student, id: Date.now() }]);
    }
    
    /**
    * Handle update a student from student list
    * @param {function} handleUpdateStudent
    */
    const handleUpdateStudent = (student: IStudent) => {
        setStudents(students.map(s => s.id === student.id ? student : s));
        setInitialStudent(null);
    };
    
    /**
    * Handle delete a student from student list
    * @param {function} handleDeleteStudent
    */
    const handleDeleteStudent = (id: number) => {
        setStudents(students.filter(s => s.id !== id));
    }
    
    /**
    * Handle toggle add the modal student
    * @param {function} toggleModalAdd
    */    
    const toggleModalAdd = (): void => {
        setIsAddModalOpen((prev) => !prev);
    };    
    
    /**
    * Handle toggle edit the modal student
    * @param {function} toggleModalEdit
    */    
    const toggleModalEdit = (student: IStudent): void => {
        setIsEditModalOpen((prev) => !prev);
        setEditingStudent(student);
    };
    
    /**
    * Handle toggle delete the modal student
    * @param {function} toggleModalDelete
    */ 
    const toggleModalDelete = (): void => {
        setIsDeleteModalOpen((prev) => !prev);
    };
    
    /**
    * Handle toggle close add the modal student
    * @param {function} CloseAdd
    */
    const CloseAdd = () => {
        setIsAddModalOpen((prev) => !prev);
    }
    
    /**
    * Handle toggle close edit the modal student
    * @param {function} CloseEdit
    */
    const CloseEdit = () => {
        setIsEditModalOpen((prev) => !prev);
    }
    
    /**
    * Handle toggle close delete the modal student
    * @param {function} CloseDelete
    */
    const CloseDelete = () => {
        setIsDeleteModalOpen((prev) => !prev);
    }
  
    return (
        <section className="container">
            <aside className="side-bar">
                <Logo
                    label="Students Dashboard"
                />
                <StudentInfo
                    fullName="Karthi Madesh"
                    role="Admin"
                    avatarUrl="https://i.pravatar.cc/150?img=12"
                    size={{ width: 128, height: 128 }}
                />
                <nav>
                <MenuBar
                    menuBarList={menuBarList}
                />
                </nav>
                <IconButton 
                    onClick={() => console.log('Icon button logout clicked')}
                    additionalClasses="icon"
                >
                    <div className="icon-container right">
                        <LogoutIcon />
                        <span>Logout</span>
                    </div>                
                </IconButton>
            </aside>
            <main>
                <Header 
                valueSearch={''}
                onBack={(): void => {
                    console.log('Handle back clicked');
                } }
                onSearchChange={(): void => {
                    console.log('Handle search change');
                } }
                onToggleNotification={(): void => {
                    console.log('Handle notification toggled');
                } }
                />
                <HeaderTable
                    onToggleSort={function (): void {
                    throw new Error('Function not implemented.');
                    } }
                    onAdd={()=>setModalType(ModalType.NEW)}
                />
                <div className="list-students">
                    <div className="student-header">
                        <div className="student-header-avatar">
                            &nbsp;    
                        </div>
                        <div className="student-header-name">Name</div>
                        <div className="student-header-email">Email</div>
                        <div className="student-header-phone">Phone</div>
                        <div className="student-header-enroll-number">Enroll Number</div>
                        <div className="student-header-date-admission">Date of Admission</div>            
                        <div className="student-header-edit">
                            &nbsp;
                        </div>         
                        <div className="student-header-delete">
                            &nbsp;
                        </div>
                    </div>
                </div>
                <StudentList
                    studentList={studentsList}
                    onEditItem={(editingStudent: IStudent) => {
                        setModalType(ModalType.EDIT);
                        setEditingStudent(editingStudent);
                    }}
                    onDeleteItem={() => {
                        setModalType(ModalType.DELETE);
                    }}
                />                
                {modalType && <Modal modalType={modalType} editingStudent={editingStudent} onClose={()=>setModalType(null)} />}
            </main>
        </section>
    )
};

const HomeWithErrorBoundary = withErrorBoundary(Home, {
  FallbackComponent: ErrorFallback,
});

export default HomeWithErrorBoundary;