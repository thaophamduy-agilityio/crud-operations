interface ButtonProps {
  className: string;
  label: string;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ className, label, ...props }: ButtonProps): JSX.Element => {
  return (
    <button aria-label="Aria button" type="button" className={className} {...props}>
      {label}
    </button>
  );
};
