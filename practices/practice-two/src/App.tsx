import '@stylesheets/app.scss'

// Libs
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import { MainLayout } from '@layouts/Default';

// Pages
import { LandingPage, Download, Pricing, Features, AboutUs, ContactUs } from '@pages/';

// Components
import { LoadingIndicator } from '@components/common/Loading';

// Constants
import { ROUTES } from '@constants/routes';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path={ROUTES.DOWNLOADS} element={<Download />} />
            <Route path={ROUTES.PRICING} element={<Pricing />} />
            <Route path={ROUTES.FEATURES} element={<Features />} />
            <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
            <Route path={ROUTES.CONTACT} element={<ContactUs />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
