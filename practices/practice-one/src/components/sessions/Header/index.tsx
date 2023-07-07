import { ChangeEvent } from 'react';
import Logo from '../Logo';
import Search from '../Search';
import DarkTheme from '../Theme';

interface HeaderProps {
  isOpenCategoriesOnMobile: boolean;
  onToggleSideBar: () => void;
  valueSearch: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isChangeDarkTheme: boolean;
  onToggleThemePage: () => void;
}

const Header = ({
  isOpenCategoriesOnMobile,
  onToggleSideBar,
  valueSearch,
  onSearchChange,
  isChangeDarkTheme,
  onToggleThemePage,
}: HeaderProps) => {
  return (
    <header className={`header-site ${isOpenCategoriesOnMobile ? 'open' : ''}`}>
      <Logo toggleSideBar={onToggleSideBar} />
      <section className="header-right">
        <Search valueSearch={valueSearch} handleSearchChange={onSearchChange} />
        <DarkTheme isChangeDarkTheme={isChangeDarkTheme} toggleThemePage={onToggleThemePage} />
      </section>
    </header>
  );
};

export default Header;
