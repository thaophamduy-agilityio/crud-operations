// Define the props for the Input component
interface InputProps {
  value: string;
  name?: string;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  labelName: string;
  isRequire?: boolean;
  type: string;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  name,
  placeholder,
  className,
  isDisabled = false,
  labelName,
  type,
  isRequire = false,
}: InputProps) => {
  return (
    <>
      <label className="input-label">
        {labelName}
        {isRequire && <span className="labelisRequire">*</span>}
      </label>
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
