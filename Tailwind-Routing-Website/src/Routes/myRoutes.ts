import { createBrowserRouter } from 'react-router'
import App from '../App.tsx'
import HomePage from '../Pages/Home/HomePage.tsx'
import AboutPage from '../Pages/Blog/BlogPage.tsx'
import PortfolioPage from '../Pages/Portfolio/PortfolioPage.tsx'
import ContactPage from '../Pages/Contact/ContactPage.tsx'
import FeaturePage from '../Pages/Features/FeaturePage.tsx'
import BlogPage from '../Pages/Blog/BlogPage.tsx'
import ServicePage from '../Pages/Services/ServicePage.tsx'
import PricingPage from '../Pages/Pricing/PricingPage.tsx'
import TeamPage from '../Pages/Team/TeamPage.tsx'
import TestimonialPage from '../Pages/Testimonials/TestimonialPage.tsx'
import StatsPage from '../Pages/Stats/StatsPage.tsx'
import WhyChooseUsPage from '../Pages/Why Choose Us/WhyChooseUs.tsx'

export const router = createBrowserRouter ([
  {
    path: '/',
    Component: App,
    children:[
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'features',
        Component: FeaturePage
      },
      {
        path: 'about',
        Component: AboutPage
      },
      {
        path: 'portfolio',
        Component: PortfolioPage
      },
      {
        path: 'blog',
        Component: BlogPage
      },
      {
        path: 'service',
        Component: ServicePage
      },
      {
        path: 'pricing',
        Component: PricingPage
      },
      {
        path: 'team',
        Component: TeamPage
      },
      {
        path: 'testimonials',
        Component: TestimonialPage
      },
      {
        path: 'stats',
        Component: StatsPage
      },
      {
        path: 'whyChooseUs',
        Component: WhyChooseUsPage
      },
      {
        path: 'contact',
        Component: ContactPage
      },
    ]
  }
]);