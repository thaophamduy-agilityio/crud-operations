// Libs
import { JSX } from "react";

// Components
import { StudentItem } from "@components/";

// Constants
import { STUDENTS_MESSAGES } from "@constants/error-messages";

//Interfaces
import { IStudent } from "@interface/student";

interface StudentProps {
    studentList: IStudent[] | undefined;
    onEditItem: (student: IStudent) => void;
    onDeleteItem: (id: number) => void;
}

/**
 * Primary UI component for user interaction
 */
const StudentList = ({ studentList, onEditItem, onDeleteItem }: StudentProps): JSX.Element => {
    return (
        <>
            {studentList?.length ? (
                <div className="list-students">
                    {
                        studentList?.map((item) => (
                            <StudentItem
                                key={item.id}
                                student= {item}
                                onEditItem={onEditItem}
                                onDeleteItem={onDeleteItem}
                            />
                        ))
                    }
                </div>
            ) : (
                <p className="student-item not-found">
                {STUDENTS_MESSAGES.NO_DATA}
                </p>
            )}
        </>
    );
}

export default StudentList;