interface ButtonProps {
  primary?: boolean;
  className?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  text?: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size,
  backgroundColor,
  label,
  text,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  return (
    <div className="btn-container">
      <button
        aria-label={`Aria ${text}`}
        type="button"
        className={['btn', `btn-${size}`, mode].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        {!!label && `${label}`}
      </button>
      {!!text && <h2 className="text">{text}</h2>}
    </div>
  );
};
