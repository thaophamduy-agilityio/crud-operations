// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { Text } from '@components/common/Text';
import ErrorFallback from '@components/ErrorBoundary';

const ContactUs = (): JSX.Element => {
  return (
    <main className="main-site">
      <div className="under-construction">
        <Text
          size="lg"
          text="Contact Page - Under construction"
        />
      </div>
    </main>
  )
}

export default withErrorBoundary(ContactUs, {
  FallbackComponent: ErrorFallback,
});