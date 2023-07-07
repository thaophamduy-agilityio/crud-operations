import { Button } from '@components/common/Button/index';
import { Image } from '@components/common/Image/index';
import logo from '@image/book-shelter.svg';

interface LogoProps {
  onToggleCategoriesOnMobile: () => void;
}

const Logo = ({ onToggleCategoriesOnMobile }: LogoProps) => {
  return (
    <section className="header-left">
      <span className="header-toogle">
        <Button className="btn btn-hamburger" onClick={onToggleCategoriesOnMobile} />
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
  );
};

export default Logo;
