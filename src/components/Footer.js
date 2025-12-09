import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nooraxrshxdhx', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arshadha-noor-mohamed-8196ba339/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/xrshxdhx.__/#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:arshadhanoormohamed@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="relative z-10 mt-auto border-t border-cyan-400/20 bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Top section with social links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            {/* Brand/Logo */}
            <div className="text-center md:text-left">
              <h3 className="text-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Arshadha's Portfolio
              </h3>
              <p className="text-cyan-300/60 text-sm mt-1">
                Web Developer & UI Designer
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-6"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-cyan-300/60">
            <div className="flex items-center gap-2">
              <span>&copy; {currentYear} All rights reserved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner accents */}
    </footer>
  );
}