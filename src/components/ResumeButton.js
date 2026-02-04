import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export function ResumeButton({ onClose, delay = 0, className = '' }) {
  const resumeUrl = `${process.env.PUBLIC_URL}/ArshadhaResume.docx`;

  return (
    <motion.a
      href={resumeUrl}
      download
      onClick={onClose}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-2 rounded-full border-2 transition-all duration-300 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border-cyan-400/50 shadow-md shadow-cyan-500/30 hover:from-cyan-500 hover:to-fuchsia-500 hover:border-fuchsia-400 hover:shadow-fuchsia-500/70 flex items-center justify-center gap-2 group ${className}`}
    >
      <Download className="w-4 h-4 text-cyan-100 group-hover:text-white group-hover:animate-bounce" />
      <span className="relative z-10 tracking-wider text-cyan-100 group-hover:text-white text-sm font-medium">
        DOWNLOAD RESUME
      </span>
    </motion.a>
  );
}
