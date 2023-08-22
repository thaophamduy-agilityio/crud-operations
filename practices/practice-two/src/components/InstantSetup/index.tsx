// Libs
import { memo } from 'react';

// Components
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';

// Types
import { Setup } from '@interface/instant-setup';

// Define the props for the Instant Set component
interface InstantSetupProps {
  setups: Setup[];
}

/**
 * Primary UI component for user interaction
 */
export const InstantSetup = memo(({
  setups = [
    {
      id: "1",
      srcSet: "/src/assets/images/setup/instant-setup-download-2x.webp",
      imageSrc: "/src/assets/images/setup/instant-setup-download.webp",
      step: 'step 1',
      title: 'Download the app',
    },
    {
      id: "2",
      srcSet: "/src/assets/images/setup/instant-setup-invite-2x.webp",
      imageSrc: "/src/assets/images/setup/instant-setup-invite.webp",
      step: "step 2",
      title: "Invite teammates",
    },
    {
      id: "3",
      srcSet: "/src/assets/images/setup/instant-setup-workspace-2x.webp",
      imageSrc: "/src/assets/images/setup/instant-setup-workspace.webp",
      step: "step 3",
      title: "Create workspace",
    },
    {
      id: "4",
      srcSet: "/src/assets/images/setup/instant-setup-track-performance-2x.webp",
      imageSrc: "/src/assets/images/setup/instant-setup-track-performance.webp",
      step: "step 4",
      title: "Track performance",
    },
  ]
}: InstantSetupProps): JSX.Element => {
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
            <Text
              size="md"
              text={`${setup.title}`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
});
