// Libs
import type { ChangeEvent, JSX } from "react";

//Interfaces
interface InputProps {
  value: string;
  name?: string;
  placeholder?: string;
  additionalClasses?: string;
  isDisabled?: boolean;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = (
    {
        name,
        placeholder,
        additionalClasses,
        isDisabled = false,
        type,
        onChange,
    }: InputProps): JSX.Element => {
    return (
        <input
            name={name}
            className={additionalClasses}
            type={type}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={onChange}
        />
    );
}
