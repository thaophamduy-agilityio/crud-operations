import { type FallbackProps } from 'react-error-boundary';

// Icons
import { AiOutlineWarning } from 'react-icons/ai';

type ErrorProps = FallbackProps;

const ErrorFallback = ({ error }: ErrorProps) => {
  return (
    <div className="error-container">
      <AiOutlineWarning className="error-icon" />
      <p className="error-message" data-testid="error message">
        {error.message}
      </p>
    </div>
  );
};

export default ErrorFallback;
