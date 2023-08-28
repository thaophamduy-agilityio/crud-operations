// Libs
import { memo } from 'react';
import isEqual from "react-fast-compare";

// Components
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';

// Mocks
import { logoBrandMock } from '@mocks/';

/**
 * Primary UI component for user interaction
 */
const ListLogoBrand = (): JSX.Element => {
  return (
    <section className="brand">
      <Text
        size="md"
        text="Thousands of teams worldwide are using Solo"
      />
      <ul className="brand-logo">
        {logoBrandMock.map((logo) => (
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
};

export const LogoBrand = memo(ListLogoBrand, isEqual);
