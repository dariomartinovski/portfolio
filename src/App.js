import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pages from './pages/Pages';

function App() {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(()=>{
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setScreenWidth(window.innerWidth));
    }
  },[screenWidth])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar screenWidth={screenWidth}/>
      <Pages/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
