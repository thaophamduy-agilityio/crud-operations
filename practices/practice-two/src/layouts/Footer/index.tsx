// Libs
import { memo } from 'react';
import isEqual from "react-fast-compare";

// Components
import Logo from '@components/common/Logo';
import Navigation from '@components/common/Navigation';
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';

// Icons
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

// Constants
import googlePlay from '@image/google-play.svg';
import appStore from '@image/app-store.svg';

/**
 * Primary UI component for user interaction
 */
const FooterComponent = (): JSX.Element => {
  return (
    <footer className="footer-site">
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
            <a className="googlePlay" href="/" target="_blank">
              <Image altText="Google Play" imageSrc={googlePlay} size= {{width: 167, height: 56}} />
            </a>
            <a className="appStore" href="/" target="_blank">
              <Image altText="App Store" imageSrc={appStore} size= {{width: 167, height: 56}} />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <Navigation />
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
          <a className="footer-icon" href="/" target="_blank">
            <BsFacebook />
          </a>
          <a className="footer-icon" href="/" target="_blank">
            <BsTwitter />
          </a>
          <a className="footer-icon" href="/" target="_blank">
            <BsInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
};

export const Footer = memo(FooterComponent, isEqual);
