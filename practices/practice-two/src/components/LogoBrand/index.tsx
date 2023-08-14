import { Brand } from '@interface/brand';
import { memo } from 'react';
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';

// Define the props for the Navigation component
interface LogoBrandProps {
  logos: Brand[];
}

/**
 * Primary UI component for user interaction
 */
export const LogoBrand = memo(({ logos }: LogoBrandProps): JSX.Element => {
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
