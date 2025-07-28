// Libs
import type { JSX } from "react";
import clsx from 'clsx';

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
const Logo = ({ label, size = 'medium', additionalClasses = '' }: LogoProps): JSX.Element => {
    return (
        <div
            className={clsx('logo', `logo-${size}`, additionalClasses)}
        >
            <a href={ROUTES.HOME} title="Students Dashboard">{label}</a>
        </div>
    );
}

export default Logo;