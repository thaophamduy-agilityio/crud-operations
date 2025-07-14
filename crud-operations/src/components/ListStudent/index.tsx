// Libs
import { JSX } from "react";

// Components
import { Student } from "@components/Student";

// Constants
import { STUDENTS_MESSAGES } from "@constants/error-messages";

//Interfaces
import { IStudent } from "@interface/student";

interface StudentProps {
    studentList: IStudent[] | undefined;
    onEditItem: () => void;
    onDeleteItem: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ListStudent = ({ studentList, onEditItem, onDeleteItem }: StudentProps): JSX.Element => {
    const renderListStudent = (): JSX.Element[] | undefined => {
        return studentList?.map((item) => (
            <Student
                key={item.id}
                student= {item}
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
            />
        ));
    };
    return (
        <>
            {studentList?.length ? (
                <div className="list-students">{renderListStudent()}</div>
            ) : (
                <p className="student-item not-found">
                {STUDENTS_MESSAGES.NO_DATA}
                </p>
            )}
        </>
    );
}