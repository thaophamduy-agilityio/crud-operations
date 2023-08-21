// Libs
import { memo } from 'react';

// Components
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';

// Constants
import { HeroImg } from '@constants/images';

// Define the props for the Hero Banner component
interface HeroProps {
  onTryItFree: () => void;
  onWatchHowItWorks: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Hero = memo(({ onTryItFree, onWatchHowItWorks }: HeroProps): JSX.Element => {  
  return (
    <section className="hero">
      <div className="hero-typography">
        <p className="hero-title">Risk-free 30 days trial</p>
        <Text 
          size="xxl"
          text="The best way to organize your work."
        />
        <Text 
          size="md"
          text="Organize your tasks, lists and reminders in one app."
        />
        <div className="btn-container">
          <Button
            label="Try it free"
            onClick={onTryItFree}
            variant="primary"
          />
          <Button
            label="Watch how it works"
            isShowLeftButton={true}
            onClick={onWatchHowItWorks}
            variant="secondary"
          />
        </div>
      </div>
      <picture className="hero-image">
        <source
          srcSet={`${HeroImg.desktop.img2x} 2x, ${HeroImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${HeroImg.tablet.img2x} 2x, ${HeroImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${HeroImg.mobile.img2x} 2x`}
          imageSrc={HeroImg.mobile.img}
          size={{
            height: 376,
            width: 436,
          }}
          altText="Hero"
        />
      </picture>
    </section>
  )
});
