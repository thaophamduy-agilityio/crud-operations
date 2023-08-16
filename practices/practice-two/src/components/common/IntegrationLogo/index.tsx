import { memo } from 'react';

// Define the props for the Image component
interface LogoIntegration {
  srcSet?: string | undefined;
  imageSrc: string | undefined;
  size: {
    width: number;
    height: number;
  }
  altText: string | undefined;
}

/**
 * Primary UI component for user interaction
 */
export const IntegrationLogo = memo(({ imageSrc, size, altText }: LogoIntegration): JSX.Element => {
  const {width, height} = size;

  return (
    <div className="integration-logo">
      <img className="img-item" src={imageSrc} width={width} height={height} alt={altText} />
    </div>
  );
});
