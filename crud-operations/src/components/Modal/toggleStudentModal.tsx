// Libs
import { ChangeEvent, useEffect, useState, type JSX } from "react";

// Components
import { Modal, Input } from "@components/";

// Interfaces
import { IStudent } from "@interface/student";
interface ToggleStudentModalProps {
    onClose: () => void;
    onToggleStudent: (student: Omit<IStudent, 'id'> | IStudent) => void;
    editingStudent: IStudent | null;
}

/**
 * Primary UI component for user interaction
 */
const ToggleStudentModal = ({ onToggleStudent, onClose, editingStudent }: ToggleStudentModalProps): JSX.Element => {
    const [formData, setFormData] = useState<Omit<IStudent, 'id'>>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        enrollNumber: '',
        dateAdmission: '',
        avatar: '',
        role: '',
    });
    const [errors, setErrors] = useState<{
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        enrollNumber?: string;
        dateAdmission?: string;
        avatar?: string;
        role?: string;
    }>({});
    
    const validate = () => {
        const newErrors: typeof errors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.enrollNumber.trim()) newErrors.enrollNumber = 'Enroll number number is required';
        if (!formData.dateAdmission.trim()) newErrors.dateAdmission = 'Date admission is required';
        if (!formData.avatar.trim()) newErrors.avatar = 'Avatar is required';
        if (!formData.role.trim()) newErrors.role = 'Role is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    useEffect(() => {
        (editingStudent) && setFormData(editingStudent);
    }, [editingStudent]);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({ ...errors, [e.target.name]: '' }); // clear error
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        editingStudent ? onToggleStudent({ ...formData, id: editingStudent.id }) : onToggleStudent(formData);
        onClose();
    };
    
    // const isStudentEmpty = Object.keys(editingStudent).length === 0;
    const toggleLabel = editingStudent ? 'Update': 'Add New';
    
    return (
        <Modal
            onClose={onClose}
            onHandle={() => onToggleStudent}
            title={`${toggleLabel} Student`}
            buttonLabel={`${toggleLabel} Student`}
        >
            <form onSubmit={handleSubmit}>
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
                {errors.firstName && <p className="error-container">{errors.firstName}</p>}
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
                {errors.lastName && <p className="error-container">{errors.lastName}</p>}
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
                {errors.email && <p className="error-container">{errors.email}</p>}
                <Input
                    additionalClasses="input input-default"
                    label="Phone"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone"
                    type="string"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <Input
                    additionalClasses="input input-default"
                    label="Enroll number"
                    name="enrollNumber"
                    id="enrollNumber"
                    placeholder="Enter your enroll number"
                    type="string"
                    value={formData.enrollNumber}
                />
                {errors.enrollNumber && <p className="error-container">{errors.enrollNumber}</p>}
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
                {errors.dateAdmission && <p className="error-container">{errors.dateAdmission}</p>}
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
                {errors.avatar && <p className="error-container">{errors.avatar}</p>}
                <Input
                    additionalClasses="input input-default"
                    label="Role"
                    name="role"
                    id="role"
                    placeholder="Enter your role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                />
                {errors.role && <p className="error-container">{errors.role}</p>}
            </form>
        </Modal>
    );
}

export default ToggleStudentModal;