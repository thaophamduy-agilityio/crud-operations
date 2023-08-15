import { Feature } from '@interface/amazing-feature';
import { memo } from 'react';
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { amazingFeatureImg } from '@constants/images';

// Define the props for the Amazing Feature component
interface AmazingFeatureProps {
  features: Feature[];
}

/**
 * Primary UI component for user interaction
 */
export const AmazingFeature = memo(({ features }: AmazingFeatureProps): JSX.Element => {
  return (
    <section className="amazing-feature">
      <picture className="amazing-feature-image">
        <source
          srcSet={`${amazingFeatureImg.desktop.img2x} 2x, ${amazingFeatureImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${amazingFeatureImg.tablet.img2x} 2x, ${amazingFeatureImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${amazingFeatureImg.mobile.img2x} 2x`}
          imageSrc={amazingFeatureImg.mobile.img}
          size={{
            height: 186,
            width: 423,
          }}
          altText="Amazing Feature"
        />
      </picture>
      <div className="amazing-feature-typography">
        <p className="amazing-feature-title">Amazing features</p>
        <Text
          size="xl"
          text="See what you can do in one app"
        />
      </div>
      <ul className="amazing-feature-container">
        {features.map((feature) => (
          <li key={feature.id} id={`amazing-feature-${feature.id}`} className="amazing-feature-item">
            <picture className="amazing-feature-container-image">
              <source
                srcSet={`${feature.srcSet.desktop.img2x} 2x, ${feature.srcSet.desktop.img}`}
                media="(min-width: 1120px)"
              />
              <source
                srcSet={`${feature.srcSet.tablet.img2x} 2x, ${feature.srcSet.tablet.img}`}
                media="(min-width: 768px)"
              />
              <Image
                srcSet={`${feature.imageSrc.mobile.img2x} 2x`}
                imageSrc={feature.imageSrc.mobile.img}
                size={{
                  height: 344,
                  width: 366,
                }}
                altText="Amazing Feature"
              />
            </picture>
            <div className="amazing-feature-container-content">
              <div className="amazing-feature-container-icon">
                <Image
                  srcSet={`${feature.iconSrc.img2x} 2x`}
                  imageSrc={feature.iconSrc.img}
                  size={{
                    height: 116,
                    width: 184,
                  }}
                  altText="Amazing Feature Icon"
                />
              </div>
              <p className="amazing-feature-container-title">{feature.title}</p>
              <p className="amazing-feature-container-desc">{feature.desc}</p>
              <Button
                label={feature.btnLabel}
                onClick={feature.onClick}
                variant="secondary"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
});
