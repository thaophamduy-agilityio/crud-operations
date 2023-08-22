// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { HeaderHero } from '@components/HeaderHero';
import { LogoBrand } from '@components/LogoBrand';
import { Schedule } from '@components/Schedule';
import { InstantSetup } from '@components/InstantSetup';
import { AmazingFeature } from '@components/AmazingFeature';
import { History } from '@components/History';
import { ListCoreValue } from '@components/CoreValue';
import { Integration } from '@components/Integration';
import { LaunchAppFeature } from '@components/LaunchAppFeature';
import { NotificationFeature } from '@components/NotificationFeature';
import { SaveTimeFeature } from '@components/SaveTimeFeature';
import { Testimonial } from '@components/Testimonial';
import { FooterHero } from '@components/FooterHero';
import ErrorFallback from '@components/ErrorBoundary';

// Mock
import {
  logoBrandMock,
  instantSetupMock,
  amazingFeatureMock,
  coreValueMock,
  saveTimeMock,
  testimonialMock
} from '@mocks/';

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
   * Handle on History
   * @param {function} onHistory
   */
  const onHistory = (): void => {
    // History here
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
      <HeaderHero 
        onTryItFree={onTryItFree}
        onWatchHowItWorks={onWatchHowItWorks}
      />

      <LogoBrand logos={logoBrandMock} />

      <Schedule 
        onDemoSchedule={onDemoSchedule}
      />

      <InstantSetup setups={instantSetupMock} />

      <AmazingFeature features={amazingFeatureMock} />

      <History
        onHistory={onHistory}
      />

      <ListCoreValue values={coreValueMock} />

      <Integration />

      <LaunchAppFeature
        onLaunchApp={onLaunchApp}
      />

      <NotificationFeature
        onFindOut={onFindOut}
      />

      <SaveTimeFeature
        saveTimes={saveTimeMock}
        OnSignUp={onSignUp}
      />

      <Testimonial testimonials={testimonialMock} />

      <FooterHero
        onTryItFree={onTryItFree}
      />
    </main>
  )
}

export default withErrorBoundary(LandingPage, {
  FallbackComponent: ErrorFallback,
});