// Libs
import type { JSX, PropsWithChildren } from "react";

// Interfaces
interface IconButtonProps extends PropsWithChildren {
  additionalClasses?: string;
  onClick?: () => void;
}

const IconButton = (
  {
    children,
    additionalClasses,
    ...props
  }: IconButtonProps): JSX.Element =>

  <button
    aria-label="Button"
    type="button"
    className={additionalClasses}
    {...props}
  >
    {children}
  </button>

export default IconButton;
