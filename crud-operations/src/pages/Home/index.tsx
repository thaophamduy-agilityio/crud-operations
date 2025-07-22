// Libs
import { useEffect, useState } from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import axios from 'axios';

// Components
import { ErrorFallback, IconButton, Logo, StudentInfo, Header, MenuBar, StudentList, HeaderTable, Modal } from '@components/';

// Icons
import { LogoutIcon } from '@components/Icon';

// Mocks
import { menuBarList } from '@mocks/index';

// Interfaces
import { ModalType } from '@interface/modalType';
import { IStudent } from '@interface/student';

const Home = () => {
    const [students, setStudents] = useState<IStudent[]>([]);
    const [editingStudent, setEditingStudent] = useState<IStudent>({} as IStudent);
    const [deleteStudentId, setDeleteStudentId] = useState<string>();
    const [modalType, setModalType] = useState<ModalType | null>(null);
    
    // 📥 GET all students
    const fetchStudents = async () => {
        const res = await axios.get(`${process.env.VITE_BASE_URL}/students`);
        setStudents(res.data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);
    
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
                    studentList={students}
                    onEditItem={(editingStudent: IStudent) => {
                        setEditingStudent(editingStudent);
                        setModalType(ModalType.EDIT);
                    }}
                    onDeleteItem={(deleteStudentId: string) => {
                        setDeleteStudentId(deleteStudentId);
                        setModalType(ModalType.DELETE);
                    }}
                />                
                {modalType && <Modal modalType={modalType} onActionSuccess={fetchStudents} editingStudent={editingStudent} deleteStudentId={deleteStudentId} onClose={()=>setModalType(null)} />}
            </main>
        </section>
    )
};

const HomeWithErrorBoundary = withErrorBoundary(Home, {
  FallbackComponent: ErrorFallback,
});

export default HomeWithErrorBoundary;