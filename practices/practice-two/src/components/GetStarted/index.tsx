import { memo } from 'react';
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';
import { getStartedImg } from '@constants/images';

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
          srcSet={`${getStartedImg.desktop.img2x} 2x, ${getStartedImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${getStartedImg.tablet.img2x} 2x, ${getStartedImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${getStartedImg.mobile.img2x} 2x`}
          imageSrc={getStartedImg.mobile.img}
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
