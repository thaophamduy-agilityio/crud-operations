// Define the props for the Card component
interface LoadingProps {
  isLoading: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const LoadingIndicator = ({ isLoading }: LoadingProps): JSX.Element | null => {
  return isLoading ? (
    <div className="loading-indicator">
      <div className="loading"></div>
    </div>
  ) : null;
};
