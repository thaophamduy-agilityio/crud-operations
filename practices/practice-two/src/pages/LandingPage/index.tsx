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
import { GetStarted } from '@components/GetStarted';
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
  return (
    <main className="main-site">
      <HeaderHero 
        onTryItFree={() => {}}
        onWatchHowItWorks={() => {}}
      />

      <LogoBrand logos={logoBrandMock} />

      <Schedule 
        onDemoSchedule={() => {}}
      />

      <InstantSetup setups={instantSetupMock} />

      <AmazingFeature features={amazingFeatureMock} />

      <History
        onHistory={() => {}}
      />

      <ListCoreValue values={coreValueMock} />

      <Integration />

      <LaunchAppFeature
        onLaunchApp={() => {}}
      />

      <NotificationFeature
        onFindOut={() => {}}
      />

      <SaveTimeFeature
        saveTimes={saveTimeMock}
        OnSignUp={() => {}}
      />

      <Testimonial testimonials={testimonialMock} />

      <GetStarted
        onTryItFree={() => {}}
      />
    </main>
  )
}

export default withErrorBoundary(LandingPage, {
  FallbackComponent: ErrorFallback,
});