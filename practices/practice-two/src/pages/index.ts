import { lazy } from 'react';

const LandingPage = lazy(() => import('./LandingPage'));
const Download = lazy(() => import('./Download'));
const Pricing = lazy(() => import('./Pricing'));
const Features = lazy(() => import('./Features'));
const AboutUs = lazy(() => import('./AboutUs'));
const ContactUs = lazy(() => import('./ContactUs'));

export { LandingPage, Download, Pricing, Features, AboutUs, ContactUs };
