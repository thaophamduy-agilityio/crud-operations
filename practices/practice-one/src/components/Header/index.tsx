import { Image } from '@components/Image/index';
import { Input } from '@components/Input';
import logo from '@image/book-shelter.svg';
import sunshine from '@image/sunshine.svg';

const Header = () => {
  return (
    <header className="header-site">
      <section className="header-left">
        <a className="header-logo" href="./" title="Book Shelter">
          <Image
            altText="Book Shelter"
            height={44}
            imageSrc={logo}
            loading="lazy"
            width={54}
            text="BookShelter"
          />
        </a>
      </section>
      <section className="header-right">
        <Input className="input input-search" placeholder="Search books" type="text" value="" />
        <Image altText="Sunshine" height={23} imageSrc={sunshine} loading="lazy" width={23} />
      </section>
    </header>
  );
};

export default Header;
