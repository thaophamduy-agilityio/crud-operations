interface ButtonProps {
  primary?: boolean;
  filter?: boolean;
  display?: 'grid' | 'list';
  sort?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  filter = false,
  display,
  sort,
  size,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  const filterBtn = filter ? 'btn-filter' : '';
  const filterBtnSort = sort ? 'btn-sort' : '';
  return (
    <button
      type="button"
      className={[
        'btn btn-display',
        `btn-${size}`,
        mode,
        filterBtn,
        `btn-display-${display}`,
        filterBtnSort,
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label != null && `${label}`}
    </button>
  );
};
