import { ChangeEvent } from 'react';
import Logo from '@components/Logo';
import Search from '@components/Search';
import DarkTheme from '@components/Theme';

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
        <DarkTheme isChangeDarkTheme={isChangeDarkTheme} toggleThemePage={onToggleThemePage} />
      </section>
    </header>
  );
};

export default Header;
