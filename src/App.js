import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { PortfolioPage } from './components/PortfolioPage';
import { ProjectPage } from './components/ProjectPage';
import { ContactPage } from './components/ContactPage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    // Router wraps everything to enable page navigation
    <Router>
      {/* Main container with dark background */}
      <div className="min-h-screen bg-slate-950 relative overflow-hidden flex flex-col">
        {/* Starfield background - creates the space effect */}
        <div className="fixed inset-0 z-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
          
          {/* Stars layer 1 - small distant stars */}
          <div className="absolute inset-0 opacity-50" style={{
            background: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                        radial-gradient(2px 2px at 60% 70%, white, transparent),
                        radial-gradient(1px 1px at 50% 50%, white, transparent),
                        radial-gradient(1px 1px at 80% 10%, white, transparent),
                        radial-gradient(2px 2px at 90% 60%, white, transparent),
                        radial-gradient(1px 1px at 33% 80%, white, transparent),
                        radial-gradient(1px 1px at 15% 90%, white, transparent)`,
            backgroundSize: '200px 200px, 250px 250px, 150px 150px, 180px 180px, 220px 220px, 190px 190px, 160px 160px',
            backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px, 150px 50px, 90px 180px, 30px 220px'
          }}></div>
          
          {/* Stars layer 2 - medium stars with cyan tint */}
          <div className="absolute inset-0 opacity-40" style={{
            background: `radial-gradient(2px 2px at 40% 20%, rgba(34, 211, 238, 0.8), transparent),
                        radial-gradient(2px 2px at 75% 45%, rgba(34, 211, 238, 0.6), transparent),
                        radial-gradient(1px 1px at 25% 60%, rgba(255, 255, 255, 0.8), transparent),
                        radial-gradient(2px 2px at 85% 80%, rgba(236, 72, 153, 0.6), transparent),
                        radial-gradient(1px 1px at 10% 40%, rgba(255, 255, 255, 0.7), transparent),
                        radial-gradient(2px 2px at 65% 15%, rgba(34, 211, 238, 0.7), transparent)`,
            backgroundSize: '300px 300px, 280px 280px, 320px 320px, 290px 290px, 310px 310px, 270px 270px',
            backgroundPosition: '0 0, 60px 80px, 120px 200px, 90px 120px, 180px 60px, 40px 160px'
          }}></div>
          
          {/* Stars layer 3 - larger glowing stars */}
          <div className="absolute inset-0 opacity-60" style={{
            background: `radial-gradient(3px 3px at 30% 25%, rgba(34, 211, 238, 1), transparent),
                        radial-gradient(3px 3px at 70% 55%, rgba(236, 72, 153, 1), transparent),
                        radial-gradient(2px 2px at 45% 75%, rgba(255, 255, 255, 0.9), transparent),
                        radial-gradient(3px 3px at 88% 35%, rgba(34, 211, 238, 0.9), transparent),
                        radial-gradient(2px 2px at 12% 65%, rgba(236, 72, 153, 0.8), transparent)`,
            backgroundSize: '400px 400px, 420px 420px, 380px 380px, 410px 410px, 390px 390px',
            backgroundPosition: '0 0, 80px 100px, 160px 240px, 120px 140px, 50px 190px'
          }}></div>
          
          {/* Subtle nebula effect */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20"></div>
        </div>

        {/* Navigation bar */}
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