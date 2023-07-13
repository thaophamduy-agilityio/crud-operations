interface ButtonProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  text?: string;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ size = 'medium', label, text, ...props }: ButtonProps): JSX.Element => {
  return (
    <div className="btn-container">
      <button
        aria-label="Aria button"
        type="button"
        className={['btn', `btn-${size}`].join(' ')}
        {...props}
      >
        {label}
      </button>
      {!!text && <h2 className="text">{text}</h2>}
    </div>
  );
};
