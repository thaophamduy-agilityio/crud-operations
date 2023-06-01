// Define the props for the Input component
interface InputProps {
  value?: string;
  defaultValue?: string;
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  labelName: string;
  required?: boolean;
  search?: boolean;
  type?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  defaultValue = '',
  name = '',
  placeholder = '',
  isDisabled = false,
  labelName = '',
  type,
  search = false,
  required = false,
}: InputProps) => {
  const mode = search ? 'input input--search' : 'input input--default';
  return (
    <>
      <label className="input-label">
        {labelName}
        {required && <span className="labelRequired">*</span>}
      </label>
      <input
        defaultValue={defaultValue}
        name={name}
        className={mode}
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
      />
    </>
  );
};
