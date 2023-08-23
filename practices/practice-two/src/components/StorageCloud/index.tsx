// Libs
import { memo } from 'react';

// Components
import { FeatureItem } from '@components/common/FeatureItem';

// Define the props for the StorageCloud component
interface StorageCloudProps {
  onStorageCloud: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const StorageCloud = memo(({ onStorageCloud }: StorageCloudProps): JSX.Element => {
  return (
    <FeatureItem 
      classItem="storage-cloud"
      srcSet = {{
        desktop: {
          img: '/src/assets/images/storage-cloud/storage-cloud-desktop.webp',
          img2x: '/src/assets/images/storage-cloud/storage-cloud-desktop-2x.webp',
        },
        tablet: {
          img: '/src/assets/images/storage-cloud/storage-cloud-tablet.webp',
          img2x: '/src/assets/images/storage-cloud/storage-cloud-tablet-2x.webp',
        },
      }}
      imageSrc = {{
        mobile: {
          img: '/src/assets/images/storage-cloud/storage-cloud-mobile.webp',
          img2x: '/src/assets/images/storage-cloud/storage-cloud-mobile-2x.webp',
        }
      }}
      imageSize = {{
        width:424,
        height:302
      }}
      subTitle="Easily find what you're looking for"
      title="History you can see & search"
      desc="We're a growing family of 382,081 designers and makers from around the world"
      labelButton="Learn more"
      onClick={onStorageCloud}
    />
  )
});
