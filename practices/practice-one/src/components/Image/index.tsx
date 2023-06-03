// Define the props for the Logo component
interface ImageProps {
  text?: string;
  loading?: 'lazy' | 'eager';
  imageSrc?: string;
  widthSize?: number;
  heightSize?: number;
  altText?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Image = ({ text, imageSrc, altText, widthSize, heightSize, loading }: ImageProps) => {
  return (
    <div className="img-container">
      {imageSrc != null && (
        <img
          className="img-item"
          loading={loading}
          src={imageSrc}
          width={`${widthSize}px`}
          height={`${heightSize}px`}
          alt={altText}
        />
      )}
      {text != null && <h1>{text}</h1>}
    </div>
  );
};
