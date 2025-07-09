// Libs
import type { JSX } from "react";

//Interfaces
interface ButtonProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'primary-outline';
    isDisabled?: boolean;
    onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (
    {
        label,
        size = 'medium',
        variant = 'primary',
        isDisabled = false,
        ...props
    }: ButtonProps): JSX.Element => {
    return (
        <button
            aria-label="Aria button"
            type="button"
            disabled={isDisabled}
            className={[
                'btn',
                `btn-${size}`,
                `btn-${isDisabled ? 'disabled' : variant}`,
            ].join(' ')}
            {...props}
        >
            {label}
        </button>
    );
}
