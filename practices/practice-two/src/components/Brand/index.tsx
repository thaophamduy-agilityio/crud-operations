// Libs
import { memo } from 'react';
import isEqual from "react-fast-compare";

// Components
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';

// Mocks
import { brandMock } from '@mocks/';

/**
 * Primary UI component for user interaction
 */
const Brand = (): JSX.Element => {
  return (
    <section className="brand">
      <Text
        size="md"
        text="Thousands of teams worldwide are using Solo"
      />
      <ul className="brand-logo">
        {brandMock.map((brand) => (
          <li key={brand.id} id={`brand-${brand.id}`} className="brand-item">
            <Image
              srcSet={`${brand.srcSet} 2x`}
              imageSrc={brand.imageSrc}
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
};

export default memo(Brand, isEqual);
