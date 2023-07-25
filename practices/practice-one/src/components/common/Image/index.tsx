// Define the props for the Image component
interface ImageProps {
  loading: 'lazy' | 'eager';
  imageSrc: string | undefined;
  width: number;
  altText: string | undefined;
}

/**
 * Primary UI component for user interaction
 */
export const Image = ({ imageSrc, altText, width, loading }: ImageProps): JSX.Element => {
  return <img className="img-item" loading={loading} src={imageSrc} width={width} alt={altText} />;
};
