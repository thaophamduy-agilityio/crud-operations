// Libs
import { memo } from 'react';

// Components
import { Feature } from '@interface/amazing-feature';
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';

// Constants
import { AmazingFeatureImg } from '@constants/images';

// Define the props for the Amazing Feature component
interface AmazingFeatureProps {
  features: Feature[];
}

/**
 * Primary UI component for user interaction
 */
export const AmazingFeature = memo(({ 
  features = [
    {
      id: "1",
      srcSet: {
        desktop: {
          img: "@images/amazing-feature/feature-how-it-work-desktop.webp",
          img2x: "@images/amazing-feature/feature-how-it-work-desktop-2x.webp",
        },
        tablet: {
          img: "@images/amazing-feature/feature-how-it-work-tablet.webp",
          img2x: "@images/amazing-feature/feature-how-it-work-tablet-2x.webp",
        },
      },
      imageSrc: {
        mobile: {
          img: "@images/amazing-feature/feature-how-it-work-mobile.webp",
          img2x: "@images/amazing-feature/feature-how-it-work-mobile-2x.webp",
        },
      },
      iconSrc: {
        img: "@images/amazing-feature/feature-how-it-work-icon.webp",
        img2x: "@images/amazing-feature/feature-how-it-work-icon-2x.webp",
      },
      title: "Stay focused whenever, wherever",
      desc: "We're a growing family of 382,081 designers and makers from around the world",
      btnLabel: "Watch how it work",
      onClick: () => {},
    },
    {
      id: "2",
      srcSet: {
        desktop: {
          img: "@images/amazing-feature/feature-get-app-desktop.webp",
          img2x: "@images/amazing-feature/feature-get-app-desktop-2x.webp",
        },
        tablet: {
          img: "@images/amazing-feature/feature-get-app-tablet.webp",
          img2x: "@images/amazing-feature/feature-get-app-tablet-2x.webp",
        },
      },
      imageSrc: {
        mobile: {
          img: "@images/amazing-feature/feature-get-app-mobile.webp",
          img2x: "@images/amazing-feature/feature-get-app-mobile-2x.webp",
        },
      },
      iconSrc: {
        img: "@images/amazing-feature/feature-get-app-icon.webp",
        img2x: "@images/amazing-feature/feature-get-app-icon-2x.webp",
      },
      title: "Share files at the right time",
      desc: "We're a growing family of 382,081 designers and makers from around the world",
      btnLabel: "Get Solo Desktop",
      onClick: () => {},
    },
    {
      id: "3",
      srcSet: {
        desktop: {
          img: "@images/amazing-feature/feature-schedule-demo-desktop.webp",
          img2x: "@images/amazing-feature/feature-schedule-demo-desktop-2x.webp",
        },
        tablet: {
          img: "@images/amazing-feature/feature-schedule-demo-tablet.webp",
          img2x: "@images/amazing-feature/feature-schedule-demo-tablet-2x.webp",
        },
      },
      imageSrc: {
        mobile: {
          img: "@images/amazing-feature/feature-schedule-demo-mobile.webp",
          img2x: "@images/amazing-feature/feature-schedule-demo-mobile-2x.webp",
        },
      },
      iconSrc: {
        img: "@images/amazing-feature/feature-schedule-demo-icon.webp",
        img2x: "@images/amazing-feature/feature-schedule-demo-icon-2x.webp",
      },
      title: "Collaborate from anywhere",
      desc: "We're a growing family of 382,081 designers and makers from around the world",
      btnLabel: "Schedule a demo",
      onClick: () => {},
    },
  ]
}: AmazingFeatureProps): JSX.Element => {
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
});
