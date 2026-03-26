import Navbar from './Navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import Branding from './branding';
import SocialMedia from './social-media';
import ContentSolution from './content-solution';
import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/$/, '');
  const isAbout = path === '/about';
  const isContact = path === '/contact';
  const isBranding = path === '/branding';
  const isSocialMedia = path === '/social-media';
  const isContentSolution = path === '/content-solution';

  return (
    <>
      <Navbar />
      {isAbout ? (
        <About />
      ) : isContact ? (
        <Contact />
      ) : isBranding ? (
        <Branding />
      ) : isSocialMedia ? (
        <SocialMedia />
      ) : isContentSolution ? (
        <ContentSolution />
      ) : (
        <Home />
      )}
    </>
  )
}

export default App
