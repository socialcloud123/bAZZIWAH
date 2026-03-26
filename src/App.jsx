import Navbar from './Navbar';
import Home from './home';
import About from './about';
import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/$/, '');
  const isAbout = path === '/about';

  return (
    <>
      <Navbar />
      {isAbout ? <About /> : <Home />}
    </>
  )
}

export default App
