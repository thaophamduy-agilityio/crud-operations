// Libs
import { memo } from 'react';

// Components
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';

// Constants
import { GetStartedImg } from '@constants/images';

// Define the props for the Get Started component
interface GetStartedProps {
  onTryItFree: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const GetStarted = memo(({ onTryItFree }: GetStartedProps): JSX.Element => {
  return (
    <section className="get-started">
      <div className="get-started-typography">
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
      <picture className="get-started-image">
        <source
          srcSet={`${GetStartedImg.desktop.img2x} 2x, ${GetStartedImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${GetStartedImg.tablet.img2x} 2x, ${GetStartedImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${GetStartedImg.mobile.img2x} 2x`}
          imageSrc={GetStartedImg.mobile.img}
          size={{
            height: 372,
            width: 534,
          }}
          altText="Get started"
        />
      </picture>
    </section>
  )
});
