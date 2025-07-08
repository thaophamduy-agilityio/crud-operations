// Libs
import type { JSX } from "react";

// Constants
import { ROUTES } from '@constants/routes';

//Interfaces
interface LogoProps {
    label: string;
    size?: 'medium' | 'large';
    additionalClasses?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Logo = ({ label, size = 'medium', additionalClasses = '' }: LogoProps): JSX.Element => {
    return (
        <div
            className={`logo logo-${size} ${additionalClasses}`}
        >
            <a href={ROUTES.HOME} title="Students Dashboard">{label}</a>
        </div>
    );
}