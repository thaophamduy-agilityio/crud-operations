import { memo } from 'react';

// Define the props for the Image component
interface TextProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  text: string;
}

/**
 * Primary UI component for user interaction
 */
export const Text = memo(({ size = 'md', text }: TextProps): JSX.Element => {
  return (
    <p className={`text-${size}`}>
      {text}
    </p>
  )
});
