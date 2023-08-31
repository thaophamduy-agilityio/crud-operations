// Libs
import { memo } from 'react';
import isEqual from "react-fast-compare";

// Components
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';

// Mocks
import { instantSetupMock } from '@mocks/';

/**
 * Primary UI component for user interaction
 */
const InstantSetup = (): JSX.Element => {
  return (
    <section className="instant-setup">
      <div className="instant-setup-content">
        <p className="instant-setup-title">Instant setup</p>
        <Text
          size="xl"
          text="Fast, simple & effortless."
        />
      </div>
      <ul className="instant-setup-container">
        {instantSetupMock.map((setup) => (
          <li key={setup.id} id={`instant-setup-${setup.id}`} className="instant-setup-item">
            <Image
              srcSet={`${setup.srcSet} 2x`}
              imageSrc={setup.imageSrc}
              size={{
                height: 64,
                width: 64,
              }}
              altText="Hero"
            />
            <p className="instant-setup-step">{setup.step}</p>
            <Text
              size="md"
              text={`${setup.title}`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
};

export default memo(InstantSetup, isEqual);
