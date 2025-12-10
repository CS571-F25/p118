import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyCloset from './pages/MyCloset';
import Outfits from './pages/Outfits';
import About from './pages/About';
import StyleAdvisorPage from './pages/StyleAdvisorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router basename="/p118">
      <div className="d-flex flex-column min-vh-100">
        <a href="#main-content" className="skip-link visually-hidden-focusable">
          Skip to main content
        </a>
        <Navigation />
        <div id="main-content" className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/closet" element={<MyCloset />} />
            <Route path="/outfits" element={<Outfits />} />
            <Route path="/style-advisor" element={<StyleAdvisorPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
