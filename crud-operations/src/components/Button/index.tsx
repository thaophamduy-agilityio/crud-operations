// Libs
import type { JSX } from "react";
import clsx from 'clsx';

//Interfaces
interface ButtonProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'outline';
    additionalClasses?: string;
    isDisabled?: boolean;
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = (
    {
        label,
        size = 'medium',
        variant = 'primary',
        isDisabled = false,
        additionalClasses,
        ...props
    }: ButtonProps): JSX.Element => {
    return (
        <button
            aria-label={`Button ${label}`}
            type="submit"
            disabled={isDisabled}
            className={
                clsx('btn', `btn-${size}`, `btn-${isDisabled ? 'disabled' : variant}`, additionalClasses)
            }
            {...props}
        >
            {label}
        </button>
    );
}

export default Button;
