import { Icon } from '@components/common/Icon/index';
import { Image } from '@components/common/Image/index';
import { ROUTES } from '@constants/routes';
import logo from 'src/assets/images/book-shelter.svg';
import { memo } from 'react';

interface LogoProps {
  onToggleCategoriesOnMobile: () => void;
}

const Logo = ({ onToggleCategoriesOnMobile }: LogoProps): JSX.Element => {
  return (
    <section className="header-left">
      <span className="header-toogle">
        <Icon
          className="icon icon-hamburger"
          aria-label="Hamburger Menu"
          onClick={onToggleCategoriesOnMobile}
        />
      </span>
      <a className="header-logo" href={ROUTES.HOME} title="Book Shelter">
        <Image altText="Book Shelter" imageSrc={logo} loading="lazy" width={54} />
        <p className="text">BookShelter</p>
      </a>
    </section>
  );
};

export default memo(Logo);
