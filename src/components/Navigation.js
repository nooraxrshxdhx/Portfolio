import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/portfolio', label: 'PORTFOLIO' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="relative z-50 py-2 md:py-4">
      <div className="w-full px-2 md:px-6">
        {/* Main navbar rectangle */}
        <div className="relative bg-slate-900/80 backdrop-blur-sm border-2 border-cyan-400/50 rounded-lg px-3 py-3 md:px-8 md:py-5">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <NavLink to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className="w-8 h-8 md:w-12 md:h-12">
                  <Logo />
                </div>
                <div>
                  <div className="text-cyan-100 tracking-wider text-sm md:text-base">ARSHADHA'S</div>
                  <div className="text-cyan-400/60 text-xs tracking-widest">PORTFOLIO</div>
                </div>
              </motion.div>
            </NavLink>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex flex-row gap-6 lg:gap-12">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-6 py-2 rounded-full border-2 whitespace-nowrap text-center transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500 border-fuchsia-400 shadow-lg shadow-fuchsia-500/50'
                        : 'bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border-cyan-400/50 hover:border-fuchsia-400/80'
                    }`
                  }
                >
                  <span className="relative z-10 tracking-wider text-cyan-100 text-sm">{link.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden relative p-2 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border-2 border-cyan-400/50 rounded-lg"
            >
              <Menu className="w-6 h-6 text-cyan-400" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-64 bg-slate-900 border-l-2 border-cyan-400/50 z-[101] overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-cyan-400/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center p-1">
                      <Logo />
                    </div>
                    <div>
                      <div className="text-cyan-100 tracking-wider text-sm">MENU</div>
                      <div className="text-cyan-400/60 text-xs">ARSHADHA'S PORTFOLIO</div>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/50 rounded-lg"
                  >
                    <X className="w-5 h-5 text-cyan-400" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 p-4 space-y-3">
                  {links.map((link, idx) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `relative px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500 border-fuchsia-400 shadow-lg shadow-fuchsia-500/50'
                            : 'bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border-cyan-400/50'
                        }`
                      }
                    >
                      <span className="relative z-10 tracking-wider text-cyan-100 text-sm">{link.label}</span>
                    </NavLink>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-cyan-400/30">
                  <div className="text-center text-cyan-400/60 text-xs">
                    &copy; 2024 Arshadha's Portfolio
                  </div>
                </div>

                {/* Gradient bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
