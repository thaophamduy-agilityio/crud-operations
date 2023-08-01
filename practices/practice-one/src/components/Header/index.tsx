import { ChangeEvent, memo } from 'react';
import Logo from '@components/Logo';
import Search from '@components/Search';
import { Icon } from '@components/common/Icon';

interface HeaderProps {
  isOpenCategoriesOnMobile: boolean;
  onToggleCategoriesOnMobile: () => void;
  valueSearch: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDarkTheme: boolean;
  onToggleThemePage: () => void;
}

const Header = memo(
  ({
    isOpenCategoriesOnMobile,
    onToggleCategoriesOnMobile,
    valueSearch,
    onSearchChange,
    isDarkTheme,
    onToggleThemePage,
  }: HeaderProps): JSX.Element => {
    return (
      <header className={`header-site ${isOpenCategoriesOnMobile ? 'open' : ''}`}>
        <Logo onToggleCategoriesOnMobile={onToggleCategoriesOnMobile} />
        <section className="header-right">
          <Search valueSearch={valueSearch} onSearchChange={onSearchChange} />
          <Icon
            className={`icon icon-sunshine ${isDarkTheme ? '' : 'dark'}`}
            onClick={onToggleThemePage}
            aria-label="Change Dark Theme"
          />
        </section>
      </header>
    );
  }
);

export default Header;
