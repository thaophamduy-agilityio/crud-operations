import { memo } from 'react';

// Define the props for the Image component
interface ImageProps {
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
export const Image = memo(({ imageSrc, size, altText }: ImageProps): JSX.Element => {
  const {width, height} = size;

  return <img className="img-item" src={imageSrc} width={width} height={height} alt={altText} />;
});
