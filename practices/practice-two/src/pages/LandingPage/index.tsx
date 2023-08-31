// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { Header } from '@components/Header';
import { ListBrand } from '@components/Brand';
import { Schedule } from '@components/Schedule';
import { ListInstantSetup } from '@components/InstantSetup';
import { ListAmazingFeature } from '@components/AmazingFeature';
import { StorageCloud } from '@components/StorageCloud';
import { ListCoreValue } from '@components/CoreValue';
import { Integration } from '@components/Integration';
import { LaunchAppFeature } from '@components/LaunchAppFeature';
import { NotificationFeature } from '@components/NotificationFeature';
import { SaveTimeFeature } from '@components/SaveTimeFeature';
import { ListTestimonial } from '@components/Testimonial';
import { Footer } from '@components/Footer';
import ErrorFallback from '@components/ErrorBoundary';

const LandingPage = (): JSX.Element => {
  /**
   * Handle on Try it free
   * @param {function} onTryItFree
   */
  const onTryItFree = (): void => {
    // Try it free here
  };

  /**
   * Handle on How it works
   * @param {function} onWatchHowItWorks
   */
  const onWatchHowItWorks = (): void => {
    // How it works here
  };

  /**
   * Handle on Demo schedule
   * @param {function} onDemoSchedule
   */
  const onDemoSchedule = (): void => {
    // Demo schedule here
  };

  /**
   * Handle on StorageCloud
   * @param {function} onStorageCloud
   */
  const onStorageCloud = (): void => {
    // StorageCloud here
  };

  /**
   * Handle on Launch app
   * @param {function} onLaunchApp
   */
  const onLaunchApp = (): void => {
    // Launch app here
  };

  /**
   * Handle on Find out
   * @param {function} onFindOut
   */
  const onFindOut = (): void => {
    // Find out here
  };

  /**
   * Handle on sign up
   * @param {function} onSignUp
   */
  const onSignUp = (): void => {
    // Sign up here
  };

  return (
    <main className="main-site">
      <Header 
        onTryItFree={onTryItFree}
        onWatchHowItWorks={onWatchHowItWorks}
      />

      <ListBrand />

      <Schedule 
        onDemoSchedule={onDemoSchedule}
      />

      <ListInstantSetup />

      <ListAmazingFeature />

      <StorageCloud
        onStorageCloud={onStorageCloud}
      />

      <ListCoreValue />

      <Integration />

      <LaunchAppFeature
        onLaunchApp={onLaunchApp}
      />

      <NotificationFeature
        onFindOut={onFindOut}
      />

      <SaveTimeFeature
        onSignUp={onSignUp}
      />

      <ListTestimonial />

      <Footer
        onTryItFree={onTryItFree}
      />
    </main>
  )
}

export default withErrorBoundary(LandingPage, {
  FallbackComponent: ErrorFallback,
});