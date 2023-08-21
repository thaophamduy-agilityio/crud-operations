// Libs
import { memo } from 'react';

// Components
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';

// Constants
import { LaunchAppImg } from '@constants/images';

// Define the props for the Launch App Feature component
interface LaunchAppFeatureProps {
  onLaunchApp: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const LaunchAppFeature = memo(({ onLaunchApp }: LaunchAppFeatureProps): JSX.Element => {
  return (
    <section className="launch-app">
      <div className="launch-app-typography">
        <p className="launch-app-title">Amazing features</p>
        <Text 
          size="xl"
          text="Your busy life deserves this"
        />
        <Text 
          size="md"
          text="We're a growing family of 382,081 designers and makers from around the world"
        />
        <div className="btn-container">
          <Button
            label="Launch Solo Desktop App"
            onClick={onLaunchApp}
            variant="secondary"
          />
        </div>
      </div>
      <picture className="launch-app-image">
        <source
          srcSet={`${LaunchAppImg.desktop.img2x} 2x, ${LaunchAppImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${LaunchAppImg.tablet.img2x} 2x, ${LaunchAppImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${LaunchAppImg.mobile.img2x} 2x`}
          imageSrc={LaunchAppImg.mobile.img}
          size={{
            height: 487,
            width: 684,
          }}
          altText="Launch app feature"
        />
      </picture>
    </section>
  )
});
