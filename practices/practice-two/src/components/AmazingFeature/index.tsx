// Libs
import { memo } from 'react';
import isEqual from "react-fast-compare";

// Components
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';

// Constants
import { AmazingFeatureImg } from '@constants/images';

// Mocks
import { amazingFeatureMock } from '@mocks/';

/**
 * Primary UI component for user interaction
 */
const AmazingFeature = (): JSX.Element => {
  return (
    <section className="amazing-feature">
      <picture className="amazing-feature-image">
        <source
          srcSet={`${AmazingFeatureImg.desktop.img2x} 2x, ${AmazingFeatureImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${AmazingFeatureImg.tablet.img2x} 2x, ${AmazingFeatureImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${AmazingFeatureImg.mobile.img2x} 2x`}
          imageSrc={AmazingFeatureImg.mobile.img}
          size={{
            height: 186,
            width: 423,
          }}
          altText="Amazing Feature"
        />
      </picture>
      <div className="amazing-feature-content">
        <p className="amazing-feature-title">Amazing features</p>
        <Text
          size="xl"
          text="See what you can do in one app"
        />
      </div>
      <ul className="amazing-feature-container">
        {amazingFeatureMock.map((feature) => (
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
                  height: 282,
                  width: 330,
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
            <div className={`amazing-feature-item-pagination-${feature.id}`}>&nbsp;</div>
          </li>
        ))}
      </ul>
    </section>
  )
};

export const ListAmazingFeature = memo(AmazingFeature, isEqual);
