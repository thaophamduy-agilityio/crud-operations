// Libs
import { withErrorBoundary } from 'react-error-boundary';

// Components
import { Header } from '@components/Header';
import Brand from '@components/Brand';
import { Schedule } from '@components/Schedule';
import InstantSetup from '@components/InstantSetup';
import { FeatureItem } from '@components/common/FeatureItem';
import AmazingFeature from '@components/AmazingFeature';
import CoreValue from '@components/CoreValue';
import SaveTime from '@components/SaveTime';
import Testimonial from '@components/Testimonial';
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

      <Brand />

      <Schedule />

      <InstantSetup />

      <AmazingFeature />

      {/* Storage Cloud Component */}
      <FeatureItem 
        classItem="storage-cloud"
        srcSet = {{
          desktop: {
            img: '/src/assets/images/storage-cloud/storage-cloud-desktop.webp',
            img2x: '/src/assets/images/storage-cloud/storage-cloud-desktop-2x.webp',
          },
          tablet: {
            img: '/src/assets/images/storage-cloud/storage-cloud-tablet.webp',
            img2x: '/src/assets/images/storage-cloud/storage-cloud-tablet-2x.webp',
          },
        }}
        imageSrc = {{
          mobile: {
            img: '/src/assets/images/storage-cloud/storage-cloud-mobile.webp',
            img2x: '/src/assets/images/storage-cloud/storage-cloud-mobile-2x.webp',
          }
        }}
        imageSize = {{
          width:300,
          height:220
        }}
        subTitle="Easily find what you're looking for"
        title="History you can see & search"
        desc="We're a growing family of 382,081 designers and makers from around the world"
        labelButton="Learn more"
        onClick={onStorageCloud}
      />

      <CoreValue />

      {/* Integration Component */}
      <FeatureItem 
        classItem="integration"
        isLogoIntegration={true}
        subTitle="Amazing features"
        title="Powerful integrations"
        desc="We're a growing family of 382,081 designers and makers from around the world"
      />

      {/* Launch App Component */}
      <FeatureItem 
        classItem="launch-app"
        srcSet = {{
          desktop: {
            img: '/src/assets/images/launch-app/launch-app-desktop.webp',
            img2x: '/src/assets/images/launch-app/launch-app-desktop-2x.webp',
          },
          tablet: {
            img: '/src/assets/images/launch-app/launch-app-tablet.webp',
            img2x: '/src/assets/images/launch-app/launch-app-tablet-2x.webp',
          },
        }}
        imageSrc = {{
          mobile: {
            img: '/src/assets/images/launch-app/launch-app-mobile.webp',
            img2x: '/src/assets/images/launch-app/launch-app-mobile-2x.webp',
          }
        }}
        imageSize = {{
          width:320,
          height:360
        }}
        subTitle="Amazing features"
        title="Your busy life deserves this"
        desc="We're a growing family of 382,081 designers and makers from around the world"
        labelButton="Launch Solo Desktop App"
        onClick={onLaunchApp}
      />

      {/* Notification Feature Component */}
      <FeatureItem 
        classItem="notification"
        srcSet = {{
          desktop: {
            img: '/src/assets/images/notification/notification-desktop.webp',
            img2x: '/src/assets/images/notification/notification-desktop-2x.webp',
          },
          tablet: {
            img: '/src/assets/images/notification/notification-tablet.webp',
            img2x: '/src/assets/images/notification/notification-tablet-2x.webp',
          },
        }}
        imageSrc = {{
          mobile: {
            img: '/src/assets/images/notification/notification-mobile.webp',
            img2x: '/src/assets/images/notification/notification-mobile-2x.webp',
          }
        }}
        imageSize = {{
          width:360,
          height:310
        }}
        subTitle="Amazing features"
        title="Never forget anything, ever again"
        desc="We're a growing family of 382,081 designers and makers from around the world"
        labelButton="Find out more"
        onClick={onFindOut}
      />

      {/* Save Time Component */}
      <section className="save-time-container">
        <FeatureItem 
          classItem="save-time"
          srcSet = {{
            desktop: {
              img: '/src/assets/images/save-time/save-time-desktop.webp',
              img2x: '/src/assets/images/save-time/save-time-desktop-2x.webp',
            },
            tablet: {
              img: '/src/assets/images/save-time/save-time-tablet.webp',
              img2x: '/src/assets/images/save-time/save-time-tablet-2x.webp',
            },
          }}
          imageSrc = {{
            mobile: {
              img: '/src/assets/images/save-time/save-time-mobile.webp',
              img2x: '/src/assets/images/save-time/save-time-mobile-2x.webp',
            }
          }}
          imageSize = {{
            width:684,
            height:487
          }}
          subTitle="Deep Focus & Multitasking"
          title="Increase Productivity"
          desc="We're a growing family of 382,081 designers and makers from around the world"
          labelButton="Sign up now"
          onClick={onSignUp}
        />
        <SaveTime />
      </section>

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