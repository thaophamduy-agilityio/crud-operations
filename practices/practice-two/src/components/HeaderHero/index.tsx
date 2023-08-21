// Libs
import { memo } from 'react';

// Components
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';

// Constants
import { HeaderHeroImg } from '@constants/images';

// Define the props for the Hero Banner component
interface HeaderHeroProps {
  onTryItFree: () => void;
  onWatchHowItWorks: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const HeaderHero = memo(({ onTryItFree, onWatchHowItWorks }: HeaderHeroProps): JSX.Element => {  
  return (
    <section className="hero-header">
      <div className="hero-header-content">
        <p className="hero-header-title">Risk-free 30 days trial</p>
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
      <picture className="hero-header-image">
        <source
          srcSet={`${HeaderHeroImg.desktop.img2x} 2x, ${HeaderHeroImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${HeaderHeroImg.tablet.img2x} 2x, ${HeaderHeroImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${HeaderHeroImg.mobile.img2x} 2x`}
          imageSrc={HeaderHeroImg.mobile.img}
          size={{
            height: 376,
            width: 436,
          }}
          altText="Hero Header"
        />
      </picture>
    </section>
  )
});
