// Define the props for the Image component
interface ImageProps {
  text?: string;
  loading: 'lazy' | 'eager';
  imageSrc: string;
  width: string;
  height: string;
  altText: string;
}

/**
 * Primary UI component for user interaction
 */
export const Image = ({
  text,
  imageSrc,
  altText,
  width,
  height,
  loading,
}: ImageProps): JSX.Element => {
  return (
    <div className="img-container">
      <img
        className="img-item"
        loading={loading}
        src={imageSrc}
        width={width}
        height={height}
        alt={altText}
      />
      {!!text && <h1 className="text">{text}</h1>}
    </div>
  );
};
