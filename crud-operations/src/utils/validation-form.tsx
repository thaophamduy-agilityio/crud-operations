// Constants
import { ERROR_MESSAGES } from '@constants/error-messages';

// Interfaces
import { IStudent } from "@interface/student";
import { FormErrors } from "@interface/form-error";

export const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
        case 'firstName':
            if (!value.trim()) return ERROR_MESSAGES.NO_FIRST_NAME;
            if (value.length < 3) return ERROR_MESSAGES.FIRST_NAME_CHARACTERS_AT_LEAST
            break;
        case 'lastName':
            if (!value.trim()) return ERROR_MESSAGES.NO_LAST_NAME;
            if (value.length < 3) return ERROR_MESSAGES.LAST_NAME_CHARACTERS_AT_LEAST
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.trim()) return ERROR_MESSAGES.NO_EMAIL;
            if (!emailRegex.test(value)) return ERROR_MESSAGES.INVALID_EMAIL;
            break;
        case 'phone':
            if (!value.trim()) return ERROR_MESSAGES.NO_PHONE;
            if (!/^\d+$/.test(value)) return ERROR_MESSAGES.PHONE_MUST_NUMBER;
            if (value.length < 9 || value.length > 15) return ERROR_MESSAGES.PHONE_NUMBER_RANGE;
            break;
        case 'enrollNumber':
            if (!value.trim()) return ERROR_MESSAGES.NO_ENROLL_NUMBER;
            if (!/^\d+$/.test(value)) return ERROR_MESSAGES.ENROLL_MUST_NUMBER;
            break;
        case 'dateAdmission':
            if (!value.trim()) return ERROR_MESSAGES.NO_DATE_ADMISSION;
            break;
        case 'avatar':
            if (!value.trim()) return ERROR_MESSAGES.NO_AVATAR;
            break;
        case 'role':
            if (!value.trim()) return ERROR_MESSAGES.NO_ROLL;
            break;
    }
};

export const validateForm = (formData: Omit<IStudent, 'id'> | IStudent, setErrors: any) => {    
    const formErrors: FormErrors = {};
    
    (Object.keys(formData) as (keyof (Omit<IStudent, 'id'> | IStudent))[]).forEach((field) => {
        const error = validateField(field, formData[field]);
        if (error) formErrors[field] = error;
    });
        
    setErrors(formErrors);
    
    return Object.keys(formErrors).length === 0;
};