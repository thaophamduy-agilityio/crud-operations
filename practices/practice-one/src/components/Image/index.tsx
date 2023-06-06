// Define the props for the Logo component
interface ImageProps {
  text?: string;
  loading: 'lazy' | 'eager';
  imageSrc: string;
  width: number;
  height: number;
  altText: string;
}

/**
 * Primary UI component for user interaction
 */
export const Image = ({ text, imageSrc, altText, width, height, loading }: ImageProps) => {
  return (
    <div className="img-container">
      {!!imageSrc && (
        <img
          className="img-item"
          loading={loading}
          src={imageSrc}
          width={`${width}px`}
          height={`${height}px`}
          alt={altText}
        />
      )}
      {!!text && <h1 className="text">{text}</h1>}
    </div>
  );
};
