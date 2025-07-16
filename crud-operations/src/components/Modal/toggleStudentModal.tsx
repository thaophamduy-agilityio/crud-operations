// Libs
import { ChangeEvent, useState, type JSX } from "react";

// Components
import { Modal } from ".";
import { Input } from "@components/Input";

// Interfaces
import { IStudent } from "@interface/student";
interface ToggleStudentModalProps {
    onCancel: () => void;
    onToggle: (item: IStudent) => void;
    studentItem: IStudent;
}

/**
 * Primary UI component for user interaction
 */
export const ToggleStudentModal = ({ onToggle, onCancel, studentItem }: ToggleStudentModalProps): JSX.Element => {
    const [form, setForm] = useState(studentItem);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    
    const isStudentEmpty = Object.keys(studentItem).length === 0;
    const toggleLabel = !isStudentEmpty ? 'Edit': 'Add New';
    
    console.log('=>', studentItem)
    
    return (
        <Modal
            onCloseModal={onCancel}
            onHandle={() => onToggle}
            title={`${toggleLabel} Student`}
            buttonLabel={`${toggleLabel} Student`}
        >
            <Input
                additionalClasses="input input-default"
                label="Avatar"
                name="avatar"
                id="avatar"
                placeholder="Enter your avatar"
                type="text"
                value={form.avatar}
                onChange={handleChange}
            />
            <Input
                additionalClasses="input input-default"
                label="First Name"
                name="firstName"
                id="firstName"
                placeholder="Enter your name"
                type="text"
                value={form.firstName}
                onChange={handleChange}
            />
            <Input
                additionalClasses="input input-default"
                label="Last Name"
                name="lastName"
                id="lastName"
                placeholder="Enter your name"
                type="text"
                value={form.lastName}
                onChange={handleChange}
            />
            <Input
                additionalClasses="input input-default"
                label="Email"
                name="email"
                id="email"
                placeholder="Enter your email"
                type="text"
                value={form.email}
                onChange={handleChange}
            />
            <Input
                additionalClasses="input input-default"
                label="Phone"
                name="phone"
                id="phone"
                placeholder="Enter your Phone"
                type="number"
                value={form.phone}
                onChange={handleChange}
            />
            <Input
                additionalClasses="input input-default"
                label="Enroll number"
                name="enrollNumber"
                id="enrollNumber"
                placeholder="Enter your enroll number"
                type="number"
                value={form.enrollNumber}
            />
            <Input
                additionalClasses="input input-default"
                label="Date of admission"
                name="dateAdmission"
                id="dateAdmission"
                placeholder="Enter your date of admission"
                type="text"
                value={form.dateAdmission}
                onChange={handleChange}
            />
            <Input
                additionalClasses="input input-default"
                label="role"
                name="role"
                id="role"
                placeholder="Enter your role"
                type="text"
                value={form.role}
                onChange={handleChange}
            />
        </Modal>
    );
}