import Navbar from './Navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/$/, '');
  const isAbout = path === '/about';
  const isContact = path === '/contact';

  return (
    <>
      <Navbar />
      {isAbout ? <About /> : isContact ? <Contact /> : <Home />}
    </>
  )
}

export default App
