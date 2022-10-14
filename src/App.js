import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Navbar />
        <Pages />
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
