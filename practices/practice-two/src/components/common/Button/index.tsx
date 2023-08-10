import { memo } from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  isShowLeftButton?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = memo(
  ({
    label,
    variant = 'primary',
    isShowLeftButton = false,
    isDisabled = false,
    ...props
  }: ButtonProps): JSX.Element => {
    return (
      <button
        aria-label={label}
        type="button"
        disabled={isDisabled}
        className={[
          'btn',
          `${isShowLeftButton ? 'caret-right' : ''}`,
          `btn-${isDisabled ? 'disabled' : variant}`,
        ].join(' ')}
        {...props}
      >
        {label}
      </button>
    );
  }
);
