// Libs
import { ChangeEvent, useEffect, useState, type JSX } from "react";

// Components
import { Modal } from ".";
import { Input } from "@components/Input";

// Interfaces
import { IStudent } from "@interface/student";
interface ToggleStudentModalProps {
    onCancel: () => void;
    onToggleStudent: (student: Omit<IStudent, 'id'> | IStudent) => void;
    editingStudent: IStudent | null;
}

/**
 * Primary UI component for user interaction
 */
export const ToggleStudentModal = ({ onToggleStudent, onCancel, editingStudent }: ToggleStudentModalProps): JSX.Element => {
    const [formData, setFormData] = useState<Omit<IStudent, 'id'>>({
        firstName: '',
        lastName: '',
        avatar: '',
        email: '',
        phone: '',
        enrollNumber: '',
        dateAdmission: '',
        role: '',
    });
    
    useEffect(() => {
        (editingStudent) && setFormData(editingStudent);
    }, [editingStudent]);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();        
        editingStudent ? onToggleStudent({ ...formData, id: editingStudent.id }) : onToggleStudent(formData);
        onCancel();
    };
    
    // const isStudentEmpty = Object.keys(editingStudent).length === 0;
    const toggleLabel = editingStudent ? 'Update': 'Add New';
    
    return (
        <Modal
            onCloseModal={onCancel}
            onHandle={() => onToggleStudent}
            title={`${toggleLabel} Student`}
            buttonLabel={`${toggleLabel} Student`}
        >
            <form onSubmit={handleSubmit}>
                <Input
                    additionalClasses="input input-default"
                    label="Avatar"
                    name="avatar"
                    id="avatar"
                    placeholder="Enter your avatar"
                    type="text"
                    value={formData.avatar}
                    onChange={handleChange}
                />
                <Input
                    additionalClasses="input input-default"
                    label="First Name"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your name"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <Input
                    additionalClasses="input input-default"
                    label="Last Name"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your name"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <Input
                    additionalClasses="input input-default"
                    label="Email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    additionalClasses="input input-default"
                    label="Phone"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone"
                    type="number"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <Input
                    additionalClasses="input input-default"
                    label="Enroll number"
                    name="enrollNumber"
                    id="enrollNumber"
                    placeholder="Enter your enroll number"
                    type="number"
                    value={formData.enrollNumber}
                />
                <Input
                    additionalClasses="input input-default"
                    label="Date of admission"
                    name="dateAdmission"
                    id="dateAdmission"
                    placeholder="Enter your date of admission"
                    type="text"
                    value={formData.dateAdmission}
                    onChange={handleChange}
                />
                <Input
                    additionalClasses="input input-default"
                    label="role"
                    name="role"
                    id="role"
                    placeholder="Enter your role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                />
            </form>
        </Modal>
    );
}