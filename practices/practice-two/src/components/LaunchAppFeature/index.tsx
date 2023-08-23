// Libs
import { memo } from 'react';

// Components
import { FeatureItem } from '@components/common/FeatureItem';

// Define the props for the Launch App Feature component
interface LaunchAppFeatureProps {
  onLaunchApp: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const LaunchAppFeature = memo(({ onLaunchApp }: LaunchAppFeatureProps): JSX.Element => {
  return (
    <FeatureItem 
      classItem="launch-app"
      srcSet = {{
        desktop: {
          img: '/src/assets/images/launch-app/launch-app-desktop.webp',
          img2x: '/src/assets/images/launch-app/launch-app-desktop-2x.webp',
        },
        tablet: {
          img: '/src/assets/images/launch-app/launch-app-tablet.webp',
          img2x: '/src/assets/images/launch-app/launch-app-tablet-2x.webp',
        },
      }}
      imageSrc = {{
        mobile: {
          img: '/src/assets/images/launch-app/launch-app-mobile.webp',
          img2x: '/src/assets/images/launch-app/launch-app-mobile-2x.webp',
        }
      }}
      imageSize = {{
        width:684,
        height:487
      }}
      subTitle="Amazing features"
      title="Your busy life deserves this"
      desc="We're a growing family of 382,081 designers and makers from around the world"
      labelButton="Launch Solo Desktop App"
      onClick={onLaunchApp}
    />
  )
});
