// Libs
import { memo } from 'react';
import isEqual from "react-fast-compare";

// Components
import { Image } from '@components/common/Image';

// Mocks
import { coreValueMock } from '@mocks/';

/**
 * Primary UI component for user interaction
 */

const ListCoreValue = (): JSX.Element => {
  return (
    <section className="core-value">
      <ul className="core-value-list">
        {coreValueMock.map((value) => (
          <li key={value.id} id={`core-value-${value.id}`} className="core-value-item">
            <picture className="core-value-list-image">
              <Image
                imageSrc={value.imageSrc}
                size={{
                  height: 48,
                  width: 48,
                }}
                altText="Amazing value"
              />
            </picture>
            <div className="core-value-list-content">
              <p className="core-value-list-title">{value.title}</p>
              <p className="core-value-list-divider">&nbsp;</p>
              <p className="core-value-list-desc">{value.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
};

export const CoreValue = memo(ListCoreValue, isEqual);
