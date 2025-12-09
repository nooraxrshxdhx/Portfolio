
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  FileText,
  Image as ImageIcon,
  Video as VideoIcon,
  Globe,
  AlertTriangle,
} from 'lucide-react';
import * as ProjectData from './projects';

export function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = Object.values(ProjectData);
  const project = projects.find((p) => String(p.id) === id);

  const [selectedFile, setSelectedFile] = useState(project?.image || null);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[50vh] text-center">
        <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl text-cyan-400 mb-2">PROJECT DATA CORRUPTED</h2>
        <p className="text-cyan-200/60 mb-8">
          The requested project file could not be located in the archives.
        </p>
        <button
          onClick={() => navigate('/portfolio')}
          className="px-6 py-2 bg-slate-800 border border-cyan-400/50 rounded text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all"
        >
          RETURN TO ARCHIVES
        </button>
      </div>
    );
  }

  const getFileIcon = (type) => {
    switch (type) {
      case 'document':
        return FileText;
      case 'image':
        return ImageIcon;
      case 'video':
        return VideoIcon;
      default:
        return FileText;
    }
  };

  const handleFileClick = (file) => {
    if (!file?.url) return;
    if (file.type === 'document') {
      window.open(file.url, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedFile(file.url);
    }
  };

  const isVideo = (url) => typeof url === 'string' && url.toLowerCase().endsWith('.mp4');
  const isImage = (url) =>
    typeof url === 'string' && /\.(png|jpg|jpeg|gif|webp)$/i.test(url);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto space-y-8"
      >
        {/* Navigation Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm tracking-wider">BACK TO ARCHIVES</span>
          </button>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
        </div>

        {/* HEADER SECTION */}
        <div className="bg-slate-900/80 border border-cyan-500/50 rounded-lg p-6 md:p-8 relative shadow-[0_0_15px_rgba(6,182,212,0.15)] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          ></div>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>

          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 tracking-wider bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              PROJECT: {project.title.toUpperCase()}
            </h1>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full mb-8"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-8 font-mono">
              <div className="p-3 bg-slate-950/50 border border-cyan-500/20 rounded">
                <span className="text-slate-400 block text-xs mb-1">TYPE</span>
                <span className="text-cyan-100">{project.category.toUpperCase()}</span>
              </div>
              <div className="p-3 bg-slate-950/50 border border-cyan-500/20 rounded">
                <span className="text-slate-400 block text-xs mb-1">STATUS</span>
                <span className="text-cyan-100">COMPLETED</span>
              </div>
              <div className="p-3 bg-slate-950/50 border border-cyan-500/20 rounded">
                <span className="text-slate-400 block text-xs mb-1">YEAR</span>
                <span className="text-cyan-100">{project.year || '2025'}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/30 text-cyan-300 text-sm font-mono tracking-wide hover:bg-cyan-950/50 hover:border-cyan-400/60 transition-colors cursor-default"
                >
                  {tech.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>

                {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {/* Visual Link Preview */}
            <div className="bg-slate-900/80 border border-cyan-500/50 rounded-lg p-1 relative overflow-hidden group">
              <div className="bg-cyan-950/30 p-2 border-b border-cyan-500/20 flex justify-between items-center">
                <h3 className="text-cyan-400 font-mono tracking-widest text-sm uppercase flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {selectedFile ? selectedFile.split('/').pop() : 'Visual_Link.png'}
                </h3>
              </div>

              <div className="p-4 bg-black/40 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                <div className="relative w-full h-full rounded overflow-hidden border border-slate-700/50">
                  <div
                    className="absolute inset-0 pointer-events-none z-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(transparent 50%, rgba(6, 182, 212, 0.1) 50%)',
                      backgroundSize: '100% 4px',
                    }}
                  ></div>

                  {selectedFile ? (
                    isVideo(selectedFile) ? (
                      <video
                        src={selectedFile}
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    ) : isImage(selectedFile) ? (
                      <img
                        src={selectedFile}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    ) : (
                      <div className="w-full aspect-video bg-slate-950 flex flex-col items-center justify-center text-cyan-500/30">
                        <Globe className="w-24 h-24 mb-4 opacity-20" />
                        <span className="font-mono text-sm uppercase tracking-widest">
                          Preview not available
                        </span>
                      </div>
                    )
                  ) : (
                    <div className="w-full aspect-video bg-slate-950 flex flex-col items-center justify-center text-cyan-500/30">
                      <Globe className="w-24 h-24 mb-4 opacity-20" />
                      <span className="font-mono text-sm uppercase tracking-widest">
                        No visual signal detected
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* PROJECT DETAILS */}
            <div className="bg-slate-900/80 border border-cyan-500/50 rounded-lg p-1 relative">
              <div className="bg-cyan-950/30 p-2 border-b border-cyan-500/20 mb-2">
                <h3 className="text-cyan-400 font-mono tracking-widest text-sm uppercase">
                  Project Details
                </h3>
              </div>
              <div className="p-6">
                <p className="text-cyan-100/90 leading-relaxed text-lg font-light">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Files & Metadata */}
          <div className="space-y-6">
            <div className="bg-slate-900/80 border border-fuchsia-500/30 rounded-lg p-1 relative sticky top-24">
              <div className="bg-fuchsia-950/20 p-2 border-b border-fuchsia-500/20 mb-2">
                <h3 className="text-fuchsia-400 font-mono tracking-widest text-sm uppercase">
                  Project Files
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {Array.isArray(project.files) && project.files.length > 0 ? (
                  project.files.map((file, idx) => {
                    const Icon = getFileIcon(file.type);
                    return (
                      <motion.div
                        key={`${file.name}-${idx}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        onClick={() => handleFileClick(file)}
                        className="flex items-start gap-3 p-3 border border-cyan-500/30 rounded bg-slate-950/50 hover:border-cyan-400 hover:bg-cyan-950/20 transition-all cursor-pointer group"
                      >
                        <div className="p-2 bg-cyan-950/50 rounded border border-cyan-500/20 group-hover:border-cyan-400/50">
                          <Icon className="w-5 h-5 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
                        </div>
                        <div className="overflow-hidden flex-1">
                          <div className="text-cyan-200 text-sm font-bold truncate mb-1 group-hover:text-white transition-colors">
                            {file.name}
                          </div>
                          <div className="text-cyan-500/60 text-[10px] uppercase font-mono truncate">
                            {file.type}
                            {file.content && ` • ${file.content.substring(0, 24)}...`}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="text-cyan-200/70 text-sm">No files attached.</div>
                )}
              </div>

              <div className="p-2 border-t border-fuchsia-500/20 bg-fuchsia-950/10 text-center">
                <span className="text-[10px] text-fuchsia-500/50 font-mono uppercase tracking-widest">
                  SECURE DATA TRANSMISSION
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectPage;