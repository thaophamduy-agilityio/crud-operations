import { Brand } from '@interface/brand';
import { memo } from 'react';
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';

// Define the props for the Logo Brand component
interface LogoBrandProps {
  logos: Brand[];
}

/**
 * Primary UI component for user interaction
 */
export const LogoBrand = memo(({
  logos = [
    {
      id: "1",
      srcSet: "/src/assets/images/brand/logo-rota-show-2x.webp",
      imageSrc: "/src/assets/images/brand/logo-rota-show.webp",
    },
    {
      id: "2",
      srcSet: "/src/assets/images/brand/logo-wares-2x.webp",
      imageSrc: "/src/assets/images/brand/logo-wares.webp",
    },
    {
      id: "3",
      srcSet: "/src/assets/images/brand/logo-rota-show-2x.webp",
      imageSrc: "/src/assets/images/brand/logo-rota-show.webp",
    },
    {
      id: "4",
      srcSet: "/src/assets/images/brand/logo-travelers-2x.webp",
      imageSrc: "/src/assets/images/brand/logo-travelers.webp",
    },
    {
      id: "5",
      srcSet: "/src/assets/images/brand/logo-gold-lines-2x.webp",
      imageSrc: "/src/assets/images/brand/logo-gold-lines.webp",
    },
    {
      id: "6",
      srcSet: "/src/assets/images/brand/logo-velocity-2x.webp",
      imageSrc: "/src/assets/images/brand/logo-velocity-2x.webp",
    },
  ]
}: LogoBrandProps): JSX.Element => {
  return (
    <section className="brand">
      <Text
        size="md"
        text="Thousands of teams worldwide are using Solo"
      />
      <ul className="brand-logo">
        {logos.map((logo) => (
          <li key={logo.id} id={`brand-${logo.id}`} className="brand-item">
            <Image
              srcSet={`${logo.srcSet} 2x`}
              imageSrc={logo.imageSrc}
              size={{
                height: 63,
                width: 155,
              }}
              altText="Hero"
            />
          </li>
        ))}
      </ul>
    </section>
  )
});
