// Libs
import { memo } from 'react';

// Components
import { FeatureItem } from '@components/common/FeatureItem';
import { ListSaveTime } from '@components/SaveTime';

// Define the props for the Save Time Feature component
interface SaveTimeFeatureProps {
  OnSignUp: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SaveTimeFeature = memo(({ OnSignUp }: SaveTimeFeatureProps): JSX.Element => {
  return (
    <section className="save-time-container">
      <FeatureItem 
        classItem="save-time"
        srcSet = {{
          desktop: {
            img: '/src/assets/images/save-time/save-time-desktop.webp',
            img2x: '/src/assets/images/save-time/save-time-desktop-2x.webp',
          },
          tablet: {
            img: '/src/assets/images/save-time/save-time-tablet.webp',
            img2x: '/src/assets/images/save-time/save-time-tablet-2x.webp',
          },
        }}
        imageSrc = {{
          mobile: {
            img: '/src/assets/images/save-time/save-time-mobile.webp',
            img2x: '/src/assets/images/save-time/save-time-mobile-2x.webp',
          }
        }}
        imageSize = {{
          width:684,
          height:487
        }}
        subTitle="Deep Focus & Multitasking"
        title="Increase Productivity"
        desc="We're a growing family of 382,081 designers and makers from around the world"
        labelButton="Sign up now"
        onClick={OnSignUp}
      />
      <ListSaveTime />
    </section>
  )
});
