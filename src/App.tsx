import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import EnginesPage from './pages/EnginesPage';
import UseCasesPage from './pages/UseCasesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import BookDemoPage from './pages/BookDemoPage';

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
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 font-sans antialiased">
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/engines" element={<EnginesPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/book-demo" element={<BookDemoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
