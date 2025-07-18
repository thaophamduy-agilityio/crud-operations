// Libs
import { useState } from 'react';
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { ErrorFallback, IconButton, Logo, StudentInfo, Header, MenuBar, StudentList, HeaderTable, AddStudentModal, EditStudentModal, DeleteStudentModal } from '@components/';

// Icons
import { LogoutIcon } from '@components/Icon';

// Mocks
import { studentsList, menuBarList } from '@mocks/index';

// Interfaces
import { IStudent } from '@interface/student';

const Home = () => {
    // throw new Error('This is a test error for the error boundary');
    
    const [students, setStudents] = useState<IStudent[]>([]);
    const [initialStudent, setInitialStudent] = useState<IStudent | null>(null);
    const [editingStudent, setEditingStudent] = useState<IStudent>({} as IStudent);
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    
    /**
    * Handle add a student to student list
    * @param {function} toggleModalAdd
    */
    const handleAddStudent = (student: Omit<IStudent, 'id'> | IStudent) => {
        setStudents([...students, { ...student, id: Date.now() }]);
        setIsAddModalOpen(!isAddModalOpen);
    }
    
    /**
    * Handle update a student from student list
    * @param {function} toggleModalAdd
    */
    const handleUpdateStudent = (student: IStudent) => {
        setStudents(students.map(s => s.id === student.id ? student : s));
        setInitialStudent(null);
        setIsEditModalOpen(!isEditModalOpen);
    };
    
    /**
    * Handle delete a student from student list
    * @param {function} toggleModalAdd
    */
    const handleDeleteStudent = (id: number) => {
        setStudents(students.filter(s => s.id !== id));
        setIsDeleteModalOpen(!isDeleteModalOpen);
    }
    
    /**
    * Handle toggle add the modal student
    * @param {function} toggleModalAdd
    */    
    const toggleModalAdd = (): void => {
        setIsAddModalOpen(!isAddModalOpen);
    };    
    
    /**
    * Handle toggle edit the modal student
    * @param {function} toggleModalEdit
    */    
    const toggleModalEdit = (student: IStudent): void => {
        setIsEditModalOpen(!isEditModalOpen);
        setEditingStudent(student);
    };
    
    /**
    * Handle toggle delete the modal student
    * @param {function} toggleModalDelete
    */ 
    const toggleModalDelete = (): void => {
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };
    
    /**
    * Handle toggle close add the modal student
    * @param {function} CloseAdd
    */
    const CloseAdd = () => {
        setIsAddModalOpen(!isAddModalOpen);
    }
    
    /**
    * Handle toggle close edit the modal student
    * @param {function} CloseEdit
    */
    const CloseEdit = () => {
        setIsEditModalOpen(!isEditModalOpen);
    }
    
    /**
    * Handle toggle close delete the modal student
    * @param {function} CloseDelete
    */
    const CloseDelete = () => {
        setIsDeleteModalOpen(!isDeleteModalOpen);
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
                    onAdd={toggleModalAdd}
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
                    onEditItem={toggleModalEdit}
                    onDeleteItem={toggleModalDelete}
                />
                {   isAddModalOpen &&
                    <AddStudentModal
                        onClose={CloseAdd}
                        onAddStudent={handleAddStudent}
                        initialStudent={initialStudent}
                    />
                }
                {   isEditModalOpen &&
                    <EditStudentModal
                        onClose={CloseEdit}
                        onEditStudent={handleUpdateStudent}
                        editingStudent={editingStudent}
                    />
                }
                {   isDeleteModalOpen &&
                    <DeleteStudentModal
                        onClose={CloseDelete}
                        onDelete={handleDeleteStudent}
                    />
                }
            </main>
        </section>
    )
};

const HomeWithErrorBoundary = withErrorBoundary(Home, {
  FallbackComponent: ErrorFallback,
});

export default HomeWithErrorBoundary;