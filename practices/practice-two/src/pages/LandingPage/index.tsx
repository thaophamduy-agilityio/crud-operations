// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { Header } from '@components/HeaderHero';
import { LogoBrand } from '@components/LogoBrand';
import { Schedule } from '@components/Schedule';
import { InstantSetup } from '@components/InstantSetup';
import { AmazingFeature } from '@components/AmazingFeature';
import { StorageCloud } from '@components/StorageCloud';
import { CoreValue } from '@components/CoreValue';
import { Integration } from '@components/Integration';
import { LaunchAppFeature } from '@components/LaunchAppFeature';
import { NotificationFeature } from '@components/NotificationFeature';
import { SaveTimeFeature } from '@components/SaveTimeFeature';
import { Testimonial } from '@components/Testimonial';
import { Footer } from '@components/FooterHero';
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

      <LogoBrand />

      <Schedule 
        onDemoSchedule={onDemoSchedule}
      />

      <InstantSetup />

      <AmazingFeature />

      <StorageCloud
        onStorageCloud={onStorageCloud}
      />

      <CoreValue />

      <Integration />

      <LaunchAppFeature
        onLaunchApp={onLaunchApp}
      />

      <NotificationFeature
        onFindOut={onFindOut}
      />

      <SaveTimeFeature
        OnSignUp={onSignUp}
      />

      <Testimonial />

      <Footer
        onTryItFree={onTryItFree}
      />
    </main>
  )
}

export default withErrorBoundary(LandingPage, {
  FallbackComponent: ErrorFallback,
});