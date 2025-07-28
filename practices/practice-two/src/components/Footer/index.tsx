// Libs
import { memo } from 'react';

// Components
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';

// Constants
import { FooterHeroImg } from '@constants/images';

// Define the props for the Get Started component
interface FooterHeroProps {
  onTryItFree: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Footer = memo(({ onTryItFree }: FooterHeroProps): JSX.Element => {
  return (
    <section className="hero-footer">
      <div className="hero-footer-content">
        <Text 
          size="xxl"
          text="Get started with Solo today"
        />
        <Text 
          size="md"
          text="Just invite your team, Solo does all the heavy-lifting."
        />
        <div className="btn-container">
          <Button
            label="Try it free"
            onClick={onTryItFree}
            variant="primary"
          />
        </div>
      </div>
      <picture className="hero-footer-image">
        <source
          srcSet={`${FooterHeroImg.desktop.img2x} 2x, ${FooterHeroImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${FooterHeroImg.tablet.img2x} 2x, ${FooterHeroImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${FooterHeroImg.mobile.img2x} 2x`}
          imageSrc={FooterHeroImg.mobile.img}
          size={{
            height: 330,
            width: 340,
          }}
          altText="Get started"
        />
      </picture>
    </section>
  )
});
