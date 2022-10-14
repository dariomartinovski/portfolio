import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pages from './pages/Pages';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Pages/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
