// Libs
import { memo } from 'react';

// Types
import { NavLink } from '@interface/nav-link';

// Define the props for the Navigation component
interface NavigationProps {
  links: NavLink[];
}

/**
 * Primary UI component for user interaction
 */
export const Navigation = memo(({
  links = [
    { id: "downloads", label: "Downloads", url: "/downloads" },
    { id: "pricing", label: "Pricing", url: "/pricing" },
    { id: "features", label: "Features", url: "/features" },
    { id: "aboutUs", label: "About Us", url: "/about-us" },
    { id: "contact", label: "Contact", url: "/contact" },
  ]
}: NavigationProps): JSX.Element => {
  return (
    <ul className="navigation">
      {links.map((link) => (
        <li key={link.id} id={`${link.id}-page`} className="navigation-item">
          <a href={link.url} className="link-label">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
});
