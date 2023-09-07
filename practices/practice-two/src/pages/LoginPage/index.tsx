// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { Text } from '@components/common/Text';
import ErrorFallback from '@components/ErrorBoundary';

const LoginPage = (): JSX.Element => {
  return (
    <main className="main-site">
      <div className="under-construction">
        <Text
          size="lg"
          text="Login Page- Under construction"
        />
      </div>
    </main>
  )
}

export default withErrorBoundary(LoginPage, {
  FallbackComponent: ErrorFallback,
});