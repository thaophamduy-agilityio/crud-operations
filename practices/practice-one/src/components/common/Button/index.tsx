import { memo } from 'react';

interface ButtonProps {
  label: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline';
  isDisabled?: boolean;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = memo(
  ({
    label,
    className = '',
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
          `${className}`,
        ].join(' ')}
        {...props}
      >
        {label}
      </button>
    );
  }
);
