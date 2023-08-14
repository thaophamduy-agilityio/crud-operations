import { memo } from 'react';
import Logo from '@components/common/Logo';
import { Navigation } from '@components/common/Navigation';
import { Button } from '@components/common/Button';
import { HamburgerMenu } from '@components/common/HamburgerMenu';

interface HeaderProps {
  isOpenMenuOnMobile: boolean;
  onToggleMenuOnMobile: () => void;
}

const Header = memo(({
    isOpenMenuOnMobile,
    onToggleMenuOnMobile,
  }: HeaderProps): JSX.Element => {
    const NavLinks = [
      { id: "downloads", label: "Downloads", url: "/downloads" },
      { id: "pricing", label: "Pricing", url: "/pricing" },
      { id: "features", label: "Features", url: "/features" },
      { id: "aboutUs", label: "About Us", url: "/about-us" },
      { id: "contact", label: "Contact", url: "/contact" },
    ]

    return (
      <header className="header-site">
        <section className="header-left">
          <Logo />
        </section>
        <section className="header-right">
          {/* Hamburger menu */}
          <HamburgerMenu isOpenMenuOnMobile={isOpenMenuOnMobile} onClick={onToggleMenuOnMobile} />
          <nav className="site-navigation">
            <Navigation links={NavLinks} />
            <ul className="user-form">
              <li id="logIn" className="navigation-item">
                <a className="link-label" href="/login">Login</a>
              </li>
              <li id="signUp" className="navigation-item">
                <Button
                  label="Sign up"
                  onClick={() => {}}
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

export default Header;
