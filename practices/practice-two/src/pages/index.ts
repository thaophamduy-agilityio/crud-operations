import { lazy } from 'react';

const LandingPage = lazy(() => import('./LandingPage'));
const Download = lazy(() => import('./Download'));
const Pricing = lazy(() => import('./Pricing'));
const Features = lazy(() => import('./Features'));
const AboutUs = lazy(() => import('./AboutUs'));
const ContactUs = lazy(() => import('./ContactUs'));
const LoginPage = lazy(() => import('./LoginPage'));

export { LandingPage, Download, Pricing, Features, AboutUs, ContactUs, LoginPage };
