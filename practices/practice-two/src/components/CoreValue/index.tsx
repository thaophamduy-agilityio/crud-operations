import { CoreValue } from '@interface/core-value';
import { memo } from 'react';
import { Image } from '@components/common/Image';

// Define the props for the Core Value component
interface CoreValueProps {
  values: CoreValue[];
}

/**
 * Primary UI component for user interaction
 */
export const ListCoreValue = memo(({ values }: CoreValueProps): JSX.Element => {
  return (
    <section className="core-value">
      <ul className="core-value-list">
        {values.map((value) => (
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
});
