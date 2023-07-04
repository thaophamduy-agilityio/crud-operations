import { Button } from '@components/common/Button/index';
import { Image } from '@components/common/Image/index';
import { Input } from '@components/common/Input/index';
import logo from '@image/book-shelter.svg';
import { ChangeEvent } from 'react';

interface HeaderProps {
  isOpenSideBar: boolean;
  toggleSideBar: () => void;
  valueSearch: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isChangeDarkTheme: boolean;
  toggleThemePage: () => void;
}

const Header = ({
  isOpenSideBar,
  toggleSideBar,
  valueSearch,
  handleSearchChange,
  isChangeDarkTheme,
  toggleThemePage,
}: HeaderProps) => {
  return (
    <header className={`header-site ${isOpenSideBar ? 'open' : ''}`}>
      <section className="header-left">
        <span className="header-toogle">
          <Button className="btn btn-hamburger" onClick={toggleSideBar} />
        </span>
        <a className="header-logo" href="./" title="Book Shelter">
          <Image
            altText="Book Shelter"
            height="44"
            imageSrc={logo}
            loading="lazy"
            width="54"
            text="BookShelter"
          />
        </a>
      </section>
      <section className="header-right">
        <Input
          type="search"
          className="input input-search"
          placeholder="Search books"
          value={valueSearch}
          onChange={handleSearchChange}
        />
        <Button
          className={`${isChangeDarkTheme ? 'btn btn-sunshine' : 'btn btn-sunshine dark'}`}
          onClick={toggleThemePage}
        />
      </section>
    </header>
  );
};

export default Header;
