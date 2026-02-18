import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SystemMapPage from './pages/SystemMapPage';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
      return;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  const location = useLocation();
  const hideChrome = location.pathname === '/system-map';

  return (
    <div className={hideChrome ? '' : 'min-h-screen bg-void text-frost font-body antialiased'}>
      <ScrollToTop />
      {!hideChrome && <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/system-map" element={<SystemMapPage />} />
      </Routes>
      {!hideChrome && <Footer />}
    </div>
  );
}

export default App;
