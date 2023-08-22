// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { Text } from '@components/common/Text';
import ErrorFallback from '@components/ErrorBoundary';

const Features = (): JSX.Element => {
  return (
    <main className="main-site">
    <div className="under-construction">
      <Text
        size="lg"
        text="Features Page - Under construction"
      />
    </div>
    </main>
  )
}

export default withErrorBoundary(Features, {
  FallbackComponent: ErrorFallback,
});