import { memo } from 'react';
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { saveTimeFeatureImg } from '@constants/images';
import { SaveTime } from '@interface/save-time';
import { ListSaveTime } from '@components/SaveTime';

// Define the props for the Save Time Feature component
interface SaveTimeFeatureProps {
  saveTimes: SaveTime[];
  OnSignUp: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SaveTimeFeature = memo(({ OnSignUp, saveTimes }: SaveTimeFeatureProps): JSX.Element => {
  return (
    <section className="save-time">
      <div className="save-time-content">
        <div className="save-time-typography">
          <p className="save-time-title">Deep Focus & Multitasking</p>
          <Text
            size="xl"
            text="Increase Productivity"
          />
          <Text
            size="md"
            text="We're a growing family of 382,081 designers and makers from around the world"
          />
          <div className="btn-container">
            <Button
              label="Sign up now"
              onClick={OnSignUp}
              variant="secondary"
            />
          </div>
        </div>
        <picture className="save-time-image">
          <source
            srcSet={`${saveTimeFeatureImg.desktop.img2x} 2x, ${saveTimeFeatureImg.desktop.img}`}
            media="(min-width: 1120px)"
          />
          <source
            srcSet={`${saveTimeFeatureImg.tablet.img2x} 2x, ${saveTimeFeatureImg.tablet.img}`}
            media="(min-width: 768px)"
          />
          <Image
            srcSet={`${saveTimeFeatureImg.mobile.img2x} 2x`}
            imageSrc={saveTimeFeatureImg.mobile.img}
            size={{
              height: 304,
              width: 828,
            }}
            altText="Amazing Feature"
          />
        </picture>
      </div>
      <ListSaveTime saveTimes={saveTimes} />
    </section>
  )
});
