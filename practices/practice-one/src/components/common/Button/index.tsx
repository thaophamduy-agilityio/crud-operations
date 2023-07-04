interface ButtonProps {
  className?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  text?: string;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  backgroundColor,
  label,
  text,
  ...props
}: ButtonProps) => {
  return (
    <div className="btn-container">
      <button
        aria-label={`Aria button`}
        type="button"
        className={['btn', `btn-${size}`].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        {!!label && `${label}`}
      </button>
      {!!text && <h2 className="text">{text}</h2>}
    </div>
  );
};
