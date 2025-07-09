// Libs
import type { JSX, ReactNode } from "react";
import clsx from 'clsx';

//Interfaces
interface IconButtonProps {
    children?: string | ReactNode;
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
            aria-label={"Button " + (children ? children : additionalClasses)}
            type="button"
            className={
                clsx('icon', `icon-${`${children ? children : additionalClasses}`.toLowerCase().trim().replaceAll(" ", "-")}`)
            }
            {...props}
        >
            {children}
        </button>
    );
}
