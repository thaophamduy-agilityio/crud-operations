import { memo } from 'react';
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';
import { notificationImg } from '@constants/images';

// Define the props for the Notification Feature component
interface NotificationFeatureProps {
  onFindOut: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const NotificationFeature = memo(({ onFindOut }: NotificationFeatureProps): JSX.Element => {
  return (
    <section className="notification">
      <div className="notification-typography">
        <p className="notification-title">Amazing features</p>
        <Text 
          size="xl"
          text="Never forget anything, ever again"
        />
        <Text 
          size="md"
          text="We're a growing family of 382,081 designers and makers from around the world"
        />
        <div className="btn-container">
          <Button
            label="Find out more"
            onClick={onFindOut}
            variant="secondary"
          />
        </div>
      </div>
      <picture className="notification-image">
        <source
          srcSet={`${notificationImg.desktop.img2x} 2x, ${notificationImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${notificationImg.tablet.img2x} 2x, ${notificationImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${notificationImg.mobile.img2x} 2x`}
          imageSrc={notificationImg.mobile.img}
          size={{
            height: 345,
            width: 480,
          }}
          altText="Launch app feature"
        />
      </picture>
    </section>
  )
});
