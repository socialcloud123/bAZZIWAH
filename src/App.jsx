import Navbar from './Navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import Branding from './branding';
import SocialMedia from './social-media';
import ContentSolution from './content-solution';
import InfluencerPage from './influencer';
import VideoProductionPage from './video-production';
import WebsiteDevelopment from './website-development';
import PerformanceMarketing from './performance-marketing';
import SEO from './seo';
import Services from './services';
import PageEnding from './components/PageEnding';
import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/$/, '');

  return (
    <>
      <Navbar />
      {path === '/about' ? <About />
      : path === '/contact' ? <Contact />
      : path === '/branding' ? <Branding />
      : path === '/social-media' ? <SocialMedia />
      : path === '/content-solution' ? <ContentSolution />
      : path === '/influencer-marketing' ? <InfluencerPage />
      : path === '/video-production' ? <VideoProductionPage />
      : path === '/website-development' ? <WebsiteDevelopment />
      : path === '/performance-marketing' ? <PerformanceMarketing />
      : path === '/seo' ? <SEO />
      : path === '/services' ? <Services />
      : <Home />}
      <PageEnding showContactForm={path !== '/contact'} />
    </>
  )
}

export default App
