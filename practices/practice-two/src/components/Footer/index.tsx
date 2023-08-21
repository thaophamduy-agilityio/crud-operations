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
  onGetItOnGooglePlay: () => void;
  onGetItOnAppStore: () => void;
  onFacebook: () => void;
  onTwitter: () => void;
  onInstagram: () => void;
  links: NavLink[];
}

/**
 * Primary UI component for user interaction
 */
export const Footer = memo(({ onGetItOnGooglePlay, onGetItOnAppStore, onFacebook, onTwitter, onInstagram,  links }: FooterProps): JSX.Element => {
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
            <div className="googlePlay" onClick={onGetItOnGooglePlay}>
              <Image altText="Google Play" imageSrc={googlePlay} size= {{width: 167, height: 56}} />
            </div>
            <div className="appStore" onClick={onGetItOnAppStore}>
              <Image altText="App Store" imageSrc={appStore} size= {{width: 167, height: 56}} />
            </div>
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
          <div className="footer-icon" onClick={onFacebook}>
            <BsFacebook />
          </div>
          <div className="footer-icon" onClick={onTwitter}>
            <BsTwitter />
          </div>
          <div className="footer-icon" onClick={onInstagram}>
            <BsInstagram />
          </div>
        </div>
      </div>
    </footer>
  )
});
