// Define the props for the Image component
interface ImageProps {
  loading: 'lazy' | 'eager';
  imageSrc: string;
  width: string;
  height: string;
  altText: string;
}

/**
 * Primary UI component for user interaction
 */
export const Image = ({ imageSrc, altText, width, height, loading }: ImageProps): JSX.Element => {
  return (
    <img
      className="img-item"
      loading={loading}
      src={imageSrc}
      width={width}
      height={height}
      alt={altText}
    />
  );
};
