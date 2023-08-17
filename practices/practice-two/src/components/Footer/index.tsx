import Logo from '@components/common/Logo';
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';
import { Navigation } from '@components/common/Navigation';
import { memo } from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import googlePlay from '@image/google-play.svg';
import appStore from '@image/app-store.svg';
import { NavLink } from '@interface/nav-link';

// Define the props for the Navigation component
interface FooterProps {
  links: NavLink[];
}

/**
 * Primary UI component for user interaction
 */
export const Footer = memo(({ links }: FooterProps): JSX.Element => {
  return (
    <section className="footer-site">
      <div className="footer-site-container-logo">
        <div className="footer-left">
          <div className="footer-site-logo">
            <div className="footer-logo">
              <Logo />
            </div>
            <div className="footer-text">
              <Text
                size="md"
                text="Join millions of people who organize work and life with Solo App."
              />
            </div>
          </div>
          <div className="footer-site-button">
            <Image altText="Logo Solo" imageSrc={googlePlay} size= {{width: 167, height: 56}} />
            <Image altText="Logo Solo" imageSrc={appStore} size= {{width: 167, height: 56}} />
          </div>
        </div>
        <div className="footer-right">
          <Navigation links={links} />
        </div>
      </div>
      <div className="footer-site-container-copy-right">
        <div className="footer-site-copy-right">
          <Text
            size="sm"
            text="© Solo Inc. Designed by UI8 Team"
          />
        </div>
        <div className="footer-site-icon">
          <BsFacebook className="footer-icon" />
          <BsTwitter className="footer-icon" />
          <BsInstagram className="footer-icon" />
        </div>
      </div>
    </section>
  )
});
