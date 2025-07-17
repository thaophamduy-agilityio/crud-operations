// Libs
import { ChangeEvent, useEffect, useState, type JSX } from "react";

// Components
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { IconButton } from "@components/IconButton";
import { CloseIcon } from "@components/Icon";

// Interfaces
import { IStudent } from "@interface/student";
interface EditStudentModalProps {
    onCancel: () => void;
    onEditStudent: (student: IStudent) => void;
    editingStudent: IStudent;
}

/**
 * Primary UI component for user interaction
 */
export const EditStudentModal = ({ onEditStudent, onCancel, editingStudent }: EditStudentModalProps): JSX.Element => {
    const [formData, setFormData] = useState<IStudent>(editingStudent);
    
    useEffect(() => {
        setFormData(editingStudent);
    }, [editingStudent]);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();        
        onEditStudent({ ...formData, id: editingStudent.id });
        onCancel();
    };
    
    return (        
        <>
            <div className="modal-overlay"></div>
            <div className="modal">
                <div className="modal-container">
                    {/* Modal header */}
                    <div className="modal-header">
                        <Text
                            type="h2"
                            size="lg"
                            additionalClasses="modal-title"
                        >
                            Edit Student
                        </Text>
                        {/* Close button */}
                        <IconButton
                            onClick={onCancel}
                            additionalClasses="icon"
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    {/* Modal content */}
                    <div className="modal-content">
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
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                        <Button
                            label="Cancel"
                            onClick={onCancel}
                            additionalClasses="btn-cancel"
                        />
                        <Button
                            label='Update Student'
                            onClick={() => onEditStudent}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}