import { IntegrationLogo } from '@components/common/IntegrationLogo';
import { Text } from '@components/common/Text';
import { integrationImg } from '@constants/images';

/**
 * Primary UI component for user interaction
 */
export const Integration = (): JSX.Element => {
  return (
    <section className="integration">
      <div className="integration-typography">
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
            altText={integrationImg.notion.alt}
            imageSrc={integrationImg.notion.src}
            size={integrationImg.notion.size}
          />
          <IntegrationLogo
            altText={integrationImg.figma.alt}
            imageSrc={integrationImg.figma.src}
            size={integrationImg.figma.size}
          />
        </div>
        <div className="integration-image-column">
          <IntegrationLogo
            altText={integrationImg.atom.alt}
            imageSrc={integrationImg.atom.src}
            size={integrationImg.atom.size}
          />
          <IntegrationLogo
            altText={integrationImg.sketch.alt}
            imageSrc={integrationImg.sketch.src}
            size={integrationImg.sketch.size}
          />
          <IntegrationLogo
            altText={integrationImg.google.alt}
            imageSrc={integrationImg.google.src}
            size={integrationImg.google.size}
          />
        </div>
        <div className="integration-image-column">
          <IntegrationLogo
            altText={integrationImg.dribbble.alt}
            imageSrc={integrationImg.dribbble.src}
            size={integrationImg.dribbble.size}
          />
          <IntegrationLogo
            altText={integrationImg.ui.alt}
            imageSrc={integrationImg.ui.src}
            size={integrationImg.ui.size}
          />
        </div>
      </div>
    </section>
  )
};
