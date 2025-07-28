// Libs
import { ChangeEvent, useState, type JSX } from "react";

// Components
import { Input, Button } from "@components";

// Constants
import { ERROR_MESSAGES } from '@constants/error-messages';

// Setvices
import { updateStudent } from '@services/studentServices';

// Interfaces
import { IStudent } from "@interface/student";
interface EditStudentFormProps {
    onClose: () => void;
    editingStudent: IStudent;
    onActionSuccess: () => void;
}

const EditStudentForm = ({ onClose, editingStudent, onActionSuccess }: EditStudentFormProps): JSX.Element => {
    const [formData, setFormData] = useState<IStudent>(editingStudent);
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
        if (!formData.firstName) newErrors.firstName = ERROR_MESSAGES.NO_FIRST_NAME;
        if (!formData.lastName.trim()) newErrors.lastName = ERROR_MESSAGES.NO_LAST_NAME;
        if (!formData.email.trim()) {
            newErrors.email = ERROR_MESSAGES.NO_EMAIL;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = ERROR_MESSAGES.INVALID_EMAIL;
        }
        if (!formData.phone.trim()) newErrors.phone = ERROR_MESSAGES.NO_PHONE;
        if (!formData.enrollNumber.trim()) newErrors.enrollNumber = ERROR_MESSAGES.NO_ENROLL_NUMBER;
        if (!formData.dateAdmission.trim()) newErrors.dateAdmission = ERROR_MESSAGES.NO_DATE_ADMISSION;
        if (!formData.avatar.trim()) newErrors.avatar = ERROR_MESSAGES.NO_AVATAR;
        if (!formData.role.trim()) newErrors.role = ERROR_MESSAGES.NO_ROLL;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({ ...errors, [e.target.name]: '' }); // clear error
    };
    
    const handleUpdateStudent = async (data: IStudent, id: string) => {
        await updateStudent(data, id);
        onActionSuccess();
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        handleUpdateStudent(formData, `${editingStudent.id}`);
        onClose();
    };
    
    return (
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
                errorMessage={errors.firstName}
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
                errorMessage={errors.lastName}
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
                errorMessage={errors.email}
            />
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
                onChange={handleChange}
                errorMessage={errors.enrollNumber}
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
                errorMessage={errors.dateAdmission}
            />
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
                label="Role"
                name="role"
                id="role"
                placeholder="Enter your role"
                type="text"
                value={formData.role}
                onChange={handleChange}
                errorMessage={errors.role}
            />
            {/* Modal footer */}
            <div className="modal-footer">
                <Button
                    label="Cancel"
                    onClick={onClose}
                    additionalClasses="btn-cancel"
                />
                <Button
                    label="Update student"
                />
            </div>
        </form>
    );
}

export default EditStudentForm;