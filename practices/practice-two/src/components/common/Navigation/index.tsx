import { NavLink } from '@interface/nav-link';
import { memo } from 'react';

// Define the props for the Navigation component
interface NavigationProps {
  links: NavLink[];
}

/**
 * Primary UI component for user interaction
 */
export const Navigation = memo(({ links }: NavigationProps): JSX.Element => {
  return (
    <ul className="navigation">
      {links.map((link) => (
        <li key={link.id} id={`${link.id}-page`}>
          <a href={link.url} className="link-label">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
});
