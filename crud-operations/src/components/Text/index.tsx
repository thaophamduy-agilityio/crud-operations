// Libs
import type { JSX, ReactNode } from "react";
import clsx from 'clsx';

//Interfaces
interface TextProps {
    children: string | ReactNode;
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'small' | 'label';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    additionalClasses?: string;
}

const Text = ({ children, type = 'p', size = 'md', additionalClasses }: TextProps): JSX.Element => {
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl'
    };
    const TextTag = type;
    return (
        <TextTag className={clsx('text', sizeClasses[size], additionalClasses)}>
            {children}
        </TextTag>
    );
}

export default Text;