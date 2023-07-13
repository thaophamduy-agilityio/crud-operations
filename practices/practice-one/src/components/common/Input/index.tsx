import { ChangeEvent } from 'react';

// Define the props for the Input component
interface InputProps {
  value: string;
  name?: string;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  name,
  placeholder,
  className,
  isDisabled = false,
  type,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <input
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={onChange}
    />
  );
};
