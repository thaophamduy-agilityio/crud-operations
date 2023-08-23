// Components
import { FeatureItem } from '@components/common/FeatureItem';

/**
 * Primary UI component for user interaction
 */
export const Integration = (): JSX.Element => {
  return (
    <FeatureItem 
      classItem="integration"
      isLogoIntegration={true}
      subTitle="Amazing features"
      title="Powerful integrations"
      desc="We're a growing family of 382,081 designers and makers from around the world"
    />
  )
};
