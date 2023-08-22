// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { Text } from '@components/common/Text';
import ErrorFallback from '@components/ErrorBoundary';

const AboutUs = (): JSX.Element => {
  return (
    <main className="main-site">
      <div className="under-construction">
        <Text
          size="lg"
          text="About Us Page- Under construction"
        />
      </div>
    </main>
  )
}

export default withErrorBoundary(AboutUs, {
  FallbackComponent: ErrorFallback,
});