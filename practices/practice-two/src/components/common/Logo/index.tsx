import { Image } from '@components/common/Image';
import { ROUTES } from '@constants/routes';
import logo from '@image/logo-solo.webp';

const Logo = (): JSX.Element => {
  return (
    <section className="header-left">
      <a className="logo" href={ROUTES.HOME} title="Logo Solo">
        <Image altText="Logo Solo" imageSrc={logo} size= {{width: 33, height: 37}}
      />
        <p className="logo-text">Solo <span className="logo-dot">.</span></p>
      </a>
    </section>
  );
};

export default Logo;
