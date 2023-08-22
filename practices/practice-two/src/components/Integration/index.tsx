// Components
import { IntegrationLogo } from '@components/common/IntegrationLogo';
import { Text } from '@components/common/Text';

// Constants
import { IntegrationImg } from '@constants/images';

/**
 * Primary UI component for user interaction
 */
export const Integration = (): JSX.Element => {
  return (
    <section className="integration">
      <div className="integration-content">
        <p className="integration-title">Amazing features</p>
        <Text 
          size="xl"
          text="Powerful integrations"
        />
        <Text 
          size="md"
          text="We're a growing family of 382,081 designers and makers from around the world"
        />
      </div>
      <div className="integration-image">
        <div className="integration-image-column">
          <IntegrationLogo
            altText={IntegrationImg.notion.alt}
            imageSrc={IntegrationImg.notion.src}
            size={IntegrationImg.notion.size}
          />
          <IntegrationLogo
            altText={IntegrationImg.figma.alt}
            imageSrc={IntegrationImg.figma.src}
            size={IntegrationImg.figma.size}
          />
        </div>
        <div className="integration-image-column">
          <IntegrationLogo
            altText={IntegrationImg.atom.alt}
            imageSrc={IntegrationImg.atom.src}
            size={IntegrationImg.atom.size}
          />
          <IntegrationLogo
            altText={IntegrationImg.sketch.alt}
            imageSrc={IntegrationImg.sketch.src}
            size={IntegrationImg.sketch.size}
          />
          <IntegrationLogo
            altText={IntegrationImg.google.alt}
            imageSrc={IntegrationImg.google.src}
            size={IntegrationImg.google.size}
          />
        </div>
        <div className="integration-image-column">
          <IntegrationLogo
            altText={IntegrationImg.dribbble.alt}
            imageSrc={IntegrationImg.dribbble.src}
            size={IntegrationImg.dribbble.size}
          />
          <IntegrationLogo
            altText={IntegrationImg.ui.alt}
            imageSrc={IntegrationImg.ui.src}
            size={IntegrationImg.ui.size}
          />
        </div>
      </div>
    </section>
  )
};
