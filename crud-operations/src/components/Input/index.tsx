// Libs
import type { ChangeEvent, JSX } from "react";

//Interfaces
interface InputProps {
    label?: string;
    value: string | undefined;
    name: string;
    id: string;
    placeholder?: string;
    additionalClasses?: string;
    isDisabled?: boolean;
    type: string;
    errorMessage?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = (
    {
        label,
        name,
        value,
        id,
        placeholder,
        additionalClasses,
        isDisabled = false,
        type,
        errorMessage,
        onChange,
        onFocus,
        onBlur,
    }: InputProps): JSX.Element => {
    return (
        <>
            { label && (
                <label className="input-label" htmlFor={id}>{label}</label>
            )}
            <input
                name={name}
                id={id}
                value={value}
                className={additionalClasses}
                type={type}
                placeholder={placeholder}
                disabled={isDisabled}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {errorMessage && (
                <p className="error-container">{errorMessage}</p>
            )}
        </>
    );
}

export default Input;
