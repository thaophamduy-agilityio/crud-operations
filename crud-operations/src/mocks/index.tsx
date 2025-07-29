// Interfaces
import { IMenuBar } from "@interface/menu-bar";
import { IStudent } from "@interface/student";

// Icons
import { HomeIcon, CourseIcon, StudentIcon, PaymentIcon, ReportIcon, SettingIcon } from '../components/Icon';

export const studentsList: IStudent[] = [
    {
        "id": "1",
        "firstName": "Karthi",
        "lastName": "Madesh",
        "avatar": "https://i.pravatar.cc/150?img=1",
        "email": "karthi@gmmail.com",
        "phone": "7305477760",
        "enrollNumber": "1234567305477760",
        "dateAdmission": "08-Dec, 2021",
        "role": "Admin"
    },
    {
        "id": "2",
        "firstName": "Karthi",
        "lastName": "Madesh",
        "avatar": "https://i.pravatar.cc/150?img=2",
        "email": "karthi@gmmail.com",
        "phone": "7305477760",
        "enrollNumber": "1234567305477760",
        "dateAdmission": "08-Dec, 2021",
        "role": "Admin"
    },
    {
        "id": "3",
        "firstName": "Karthi",
        "lastName": "Madesh",
        "avatar": "https://i.pravatar.cc/150?img=3",
        "email": "karthi@gmmail.com",
        "phone": "7305477760",
        "enrollNumber": "1234567305477760",
        "dateAdmission": "08-Dec, 2021",
        "role": "Admin"
    },
    {
        "id": "4",
        "firstName": "Karthi",
        "lastName": "Madesh",
        "avatar": "https://i.pravatar.cc/150?img=4",
        "email": "karthi@gmmail.com",
        "phone": "7305477760",
        "enrollNumber": "1234567305477760",
        "dateAdmission": "08-Dec, 2021",
        "role": "Admin"
    },
    {
        "id": "5",
        "firstName": "Karthi",
        "lastName": "Madesh",
        "avatar": "https://i.pravatar.cc/150?img=5",
        "email": "karthi@gmmail.com",
        "phone": "7305477760",
        "enrollNumber": "1234567305477760",
        "dateAdmission": "08-Dec, 2021",
        "role": "Admin"
    },
    {
        "id": "6",
        "firstName": "Karthi",
        "lastName": "Madesh",
        "avatar": "https://i.pravatar.cc/150?img=6",
        "email": "karthi@gmmail.com",
        "phone": "7305477760",
        "enrollNumber": "1234567305477760",
        "dateAdmission": "08-Dec, 2021",
        "role": "Admin"
    },
    {
        "id": "7",
        "firstName": "Karthi",
        "lastName": "Madesh",
        "avatar": "https://i.pravatar.cc/150?img=7",
        "email": "karthi@gmmail.com",
        "phone": "7305477760",
        "enrollNumber": "1234567305477760",
        "dateAdmission": "08-Dec, 2021",
        "role": "Admin"
    },
]

export const menuBarList: IMenuBar[] = [
    {
        id: 1,
        name: "Home",
        icon: <HomeIcon
        />,
        onClick: () => {}
    },
    {
        id: 2,
        name: "Course",
        icon: <CourseIcon />,
        onClick: () => {}
    },
    {
        id: 3,
        name: "Students",
        icon: <StudentIcon />,
        onClick: () => {}
    },
    {
        id: 4,
        name: "Payment",
        icon: <PaymentIcon />,
        onClick: () => {}
    },
    {
        id: 5,
        name: "Report",
        icon: <ReportIcon />,
        onClick: () => {}
    },
    {
        id: 6,
        name: "Settings",
        icon: <SettingIcon />,
        onClick: () => {}
    }
]