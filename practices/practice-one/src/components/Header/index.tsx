import { ChangeEvent } from 'react';
import Logo from '@components/Logo';
import Search from '@components/Search';
import { Icon } from '@components/common/Icon';

interface HeaderProps {
  isOpenCategoriesOnMobile: boolean;
  onToggleCategoriesOnMobile: () => void;
  valueSearch: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isChangeDarkTheme: boolean;
  onToggleThemePage: () => void;
}

const Header = ({
  isOpenCategoriesOnMobile,
  onToggleCategoriesOnMobile,
  valueSearch,
  onSearchChange,
  isChangeDarkTheme,
  onToggleThemePage,
}: HeaderProps): JSX.Element => {
  return (
    <header className={`header-site ${isOpenCategoriesOnMobile ? 'open' : ''}`}>
      <Logo onToggleCategoriesOnMobile={onToggleCategoriesOnMobile} />
      <section className="header-right">
        <Search valueSearch={valueSearch} onSearchChange={onSearchChange} />
        <Icon
          className={`icon icon-sunshine ${isChangeDarkTheme ? '' : 'dark'}`}
          onClick={onToggleThemePage}
          aria-label="Change Dark Theme"
        />
      </section>
    </header>
  );
};

export default Header;
