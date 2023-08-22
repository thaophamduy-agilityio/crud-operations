// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { Text } from '@components/common/Text';
import ErrorFallback from '@components/ErrorBoundary';

const Pricing = (): JSX.Element => {
  return (
    <main className="main-site">
      <div className="under-construction">
        <Text
          size="lg"
          text="Pricing Page - Under construction"
        />
      </div>
    </main>
  )
}

export default withErrorBoundary(Pricing, {
  FallbackComponent: ErrorFallback,
});