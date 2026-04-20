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
      <>
        <Navbar />
        {(() => {
          switch (path) {
            case '/about':
              return <About />;
            case '/contact':
              return <Contact />;
            case '/branding':
              return <Branding />;
            case '/social-media':
              return <SocialMedia />;
            case '/content-solution':
              return <ContentSolution />;
            case '/influencer-marketing':
              return <InfluencerPage />;
            case '/video-production':
              return <VideoProductionPage />;
            case '/website-development':
              return <WebsiteDevelopment />;
            case '/performance-marketing':
              return <PerformanceMarketing />;
            case '/seo':
              return <SEO />;
            case '/services':
              return <Services />;
            default:
              return <Home />;
          }
        })()}
        {path !== '/about' && <PageEnding showContactForm={path !== '/contact'} />}
      </>
    </>
  )
}

export default App
