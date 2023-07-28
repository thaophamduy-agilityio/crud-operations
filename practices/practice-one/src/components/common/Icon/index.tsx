interface IconProps {
  className: string;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Icon = ({ className, ...props }: IconProps): JSX.Element => {
  return <i aria-label="Aria icon" className={className} {...props} />;
};
