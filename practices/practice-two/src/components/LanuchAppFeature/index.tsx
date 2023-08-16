import { memo } from 'react';
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';
import { launchAppImg } from '@constants/images';

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
          srcSet={`${launchAppImg.desktop.img2x} 2x, ${launchAppImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${launchAppImg.tablet.img2x} 2x, ${launchAppImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${launchAppImg.mobile.img2x} 2x`}
          imageSrc={launchAppImg.mobile.img}
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
