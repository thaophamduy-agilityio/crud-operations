// Libs
import type { JSX, PropsWithChildren } from "react";

//Interfaces
interface IconButtonProps extends PropsWithChildren {
    additionalClasses?: string;
    onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const IconButton = (
    {
        children,
        additionalClasses,
        ...props
    }: IconButtonProps): JSX.Element => {
    return (
        <button
            aria-label="Button"
            type="button"
            className={additionalClasses}
            {...props}
        >
            {children}
        </button>
    );
}
