// Libs
import { memo } from 'react';

// Components
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';

// Types
import { ItemFeature } from '@interface/feature-item';

// Constants
import { IntegrationImg } from '@constants/images';

/**
 * Primary UI component for user interaction
 */
export const FeatureItem = memo(({
  classItem,
  srcSet,
  imageSrc,
  imageSize,
  isLogoIntegration,
  subTitle,
  title,
  desc,
  labelButton,
  onClick,
}: ItemFeature): JSX.Element => {
  return (
    <section className={classItem}>
      {!!imageSrc && !!srcSet && (
        <picture className={`${classItem}-image`}>
          <source
            srcSet={`${srcSet?.desktop.img2x} 2x, ${srcSet?.desktop.img}`}
            media="(min-width: 1120px)"
          />
          <source
            srcSet={`${srcSet?.tablet.img2x} 2x, ${srcSet?.tablet.img}`}
            media="(min-width: 768px)"
          />
          <Image
            srcSet={`${imageSrc?.mobile.img2x} 2x`}
            imageSrc={imageSrc?.mobile.img}
            size={{
              width: Number(imageSize?.width),
              height: Number(imageSize?.height),
            }}
            altText={classItem}
          />
        </picture>
      )}
      <div className={`${classItem}-content`}>
        <p className={`${classItem}-title`}>{subTitle}</p>
        <Text 
          size="xl"
          text={`${title}`}
        />
        {!!desc && (
          <Text 
            size="md"
            text={`${desc}`}
          />
        )}
        {!!labelButton && onClick && (
          <div className="btn-container">
            <Button
              label={`${labelButton}`}
              onClick={onClick}
              variant="secondary"
            />
          </div>
        )}
      </div>
      {isLogoIntegration && (
        <div className={`${classItem}-image`}>
          <div className={`${classItem}-image-column`}>
            <div className="integration-logo">
              <Image
                altText={IntegrationImg.notion.alt}
                imageSrc={IntegrationImg.notion.src}
                size={IntegrationImg.notion.size}
              />
            </div>
            <div className="integration-logo">
              <Image
                altText={IntegrationImg.figma.alt}
                imageSrc={IntegrationImg.figma.src}
                size={IntegrationImg.figma.size}
              />
            </div>
          </div>
          <div className={`${classItem}-image-column`}>
            <div className="integration-logo">
              <Image
                altText={IntegrationImg.atom.alt}
                imageSrc={IntegrationImg.atom.src}
                size={IntegrationImg.atom.size}
              />
            </div>
            <div className="integration-logo">
              <Image
                altText={IntegrationImg.sketch.alt}
                imageSrc={IntegrationImg.sketch.src}
                size={IntegrationImg.sketch.size}
              />
            </div>
            <div className="integration-logo">
              <Image
                altText={IntegrationImg.google.alt}
                imageSrc={IntegrationImg.google.src}
                size={IntegrationImg.google.size}
              />
            </div>
          </div>
          <div className={`${classItem}-image-column`}>
            <div className="integration-logo">
              <Image
                altText={IntegrationImg.dribble.alt}
                imageSrc={IntegrationImg.dribble.src}
                size={IntegrationImg.dribble.size}
              />
            </div>
            <div className="integration-logo">
              <Image
                altText={IntegrationImg.ui.alt}
                imageSrc={IntegrationImg.ui.src}
                size={IntegrationImg.ui.size}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
});
