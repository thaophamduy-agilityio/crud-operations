// Libs
import type { JSX } from "react";
import clsx from 'clsx';

//Interfaces
interface UserInfoProps {
    fullName: string;
    role: string;
    avatarUrl: string;
    size: {
        width: number;
        height: number;
    }
    additionalClasses?: string;
}

/**
 * Primary UI component for user interaction
 */
export const UserInfo = ({ fullName, role, avatarUrl, size, additionalClasses = '' }: UserInfoProps): JSX.Element => {
    const { width, height } = size;
    return (
        <div
            className={clsx('user-info', additionalClasses)}
        >
            <img src={avatarUrl} alt={fullName} width={width} height={height} />
            <p className="user-name">{fullName}</p>
            <p className="user-role">{role}</p>
        </div>
    );
}