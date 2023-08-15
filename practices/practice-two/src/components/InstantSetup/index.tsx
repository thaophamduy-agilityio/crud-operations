import { Setup } from '@interface/instant-setup';
import { memo } from 'react';
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';

// Define the props for the Instant Set component
interface InstantSetupProps {
  setups: Setup[];
}

/**
 * Primary UI component for user interaction
 */
export const InstantSetup = memo(({ setups }: InstantSetupProps): JSX.Element => {
  return (
    <section className="instant-setup">
      <div className="instant-setup-typography">
        <p className="instant-setup-title">Instant setup</p>
        <Text
          size="xl"
          text="Fast, simple & effortless."
        />
      </div>
      <ul className="instant-setup-container">
        {setups.map((setup) => (
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
          </li>
        ))}
      </ul>
    </section>
  )
});
