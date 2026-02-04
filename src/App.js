import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { PortfolioPage } from './components/PortfolioPage';
import { ProjectPage } from './components/ProjectPage';
import { ContactPage } from './components/ContactPage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { StarfieldBackground } from './components/layout/StarfieldBackground';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 relative overflow-x-hidden flex flex-col">
        <StarfieldBackground />

        <Navigation />
        
        {/* Main content area - different page shows here */}
        <div className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        {/* Footer at bottom */}
        <Footer />
      </div>
    </Router>
  );
}
