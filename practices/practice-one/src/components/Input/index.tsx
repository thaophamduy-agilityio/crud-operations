// Define the props for the Input component
interface InputProps {
  value: string;
  name?: string;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  type: string;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({ name, placeholder, className, isDisabled = false, type }: InputProps) => {
  return (
    <>
      <input
        name={name}
        className={className}
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
      />
    </>
  );
};
