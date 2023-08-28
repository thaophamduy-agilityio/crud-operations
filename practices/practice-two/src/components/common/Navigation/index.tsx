// Libs
import { memo } from 'react';
import isEqual from "react-fast-compare";

// Mocks
import { navLinkMock } from '@mocks/';

/**
 * Primary UI component for user interaction
 */
const ListNavigation = (): JSX.Element => {
  return (
    <ul className="navigation">
      {navLinkMock.map((link) => (
        <li key={link.id} id={`${link.id}-page`} className="navigation-item">
          <a href={link.url} className="link-label">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
};

export const Navigation = memo(ListNavigation, isEqual);
