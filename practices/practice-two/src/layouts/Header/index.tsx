import { memo } from 'react';
import Logo from '@components/common/Logo';
import { Navigation } from '@components/common/Navigation';
import { Button } from '@components/common/Button';
import { HamburgerMenu } from '@components/common/HamburgerMenu';
import { navLinkMock } from '@mocks/';

interface HeaderProps {
  isOpenMenuOnMobile: boolean;
  onToggleMenuOnMobile: () => void;
  onSignUp: () => void;
}

export const Header = memo(({
    isOpenMenuOnMobile,
    onToggleMenuOnMobile,
    onSignUp,
  }: HeaderProps): JSX.Element => {
    return (
      <header className="header-site">
        <section className="header-left">
          <Logo />
        </section>
        <section className="header-right">
          {/* Hamburger menu */}
          <HamburgerMenu isOpenMenuOnMobile={isOpenMenuOnMobile} onClick={onToggleMenuOnMobile} />
          <nav className="site-navigation">
            <Navigation links={navLinkMock} />
            <ul className="user-form">
              <li id="logIn" className="navigation-item">
                <a className="link-label" href="/login">Login</a>
              </li>
              <li id="signUp" className="navigation-item">
                <Button
                  label="Sign up"
                  onClick={onSignUp}
                  variant="primary"
                />
              </li>
            </ul>
          </nav>
        </section>
      </header>
    );
  }
);
