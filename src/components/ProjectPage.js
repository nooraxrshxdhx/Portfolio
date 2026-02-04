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
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Code2,
  ExternalLink,
  Zap,
  Target,
  TrendingUp,
  Lightbulb,
  Users,
  Award,
  BookOpen,
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

  const imageFiles = project?.files?.filter((file) => file.type === 'image') || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectedFile = imageFiles.length > 0 
    ? imageFiles[currentImageIndex]?.url 
    : project?.image || null;

  const isCertificate = project?.category?.toLowerCase() === 'certification';

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[50vh] text-center">
        <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl text-cyan-400 mb-2 font-mono tracking-wider">
          PROJECT DATA CORRUPTED
        </h2>
        <p className="text-cyan-200/60 mb-8">
          The requested project file could not be located in the archives.
        </p>
        <button
          onClick={() => navigate('/portfolio')}
          className="px-6 py-2 bg-slate-800 border border-cyan-400/50 rounded text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all font-mono tracking-wider"
        >
          RETURN TO ARCHIVES
        </button>
      </div>
    );
  }

  const nextImage = () => {
    if (imageFiles.length <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % imageFiles.length);
  };

  const prevImage = () => {
    if (imageFiles.length <= 1) return;
    setCurrentImageIndex((prev) => (prev - 1 + imageFiles.length) % imageFiles.length);
  };

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
    } else if (file.type === 'image') {
      const index = imageFiles.findIndex((img) => img.url === file.url);
      if (index >= 0) setCurrentImageIndex(index);
    }
  };

  const isVideo = (url) => typeof url === 'string' && /\.mp4$/i.test(url);
  const isImage = (url) => typeof url === 'string' && /\.(png|jpg|jpeg|gif|webp)$/i.test(url);

  // Helper function to render formatted essay content
  const renderEssayContent = (content) => {
    if (!content) return null;

    // If content is already a React element, render it directly
    if (typeof content === 'object' && content.$$typeof) {
      return content;
    }

    // If it's a string, preserve line breaks
    if (typeof content === 'string') {
      return (
        <div className="space-y-4 text-slate-300 leading-relaxed text-base md:text-lg">
          {content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10 starry-sky" />
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto space-y-8"
        >
          {/* Navigation Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate('/portfolio')}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all group"
              aria-label="Back to portfolio"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm tracking-wider">BACK TO ARCHIVES</span>
            </button>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
          </div>

          {/* Project Header */}
          <div className="bg-slate-900/80 border border-cyan-500/50 rounded-lg p-6 md:p-8 relative shadow-[0_0_15px_rgba(6,182,212,0.15)] overflow-hidden">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 rounded-md text-xs font-mono tracking-widest uppercase bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-2">
                {isCertificate && <Award className="w-3 h-3" />}
                {project.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-wider bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              {isCertificate ? '' : 'PROJECT: '}{project.title.toUpperCase()}
            </h1>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Visual Preview and Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Visual Preview */}
              <div className="bg-slate-900/80 border border-cyan-500/50 rounded-lg p-1 relative overflow-hidden group shadow-[0_0_22px_rgba(6,182,212,0.25)]">
                <div className="bg-cyan-950/30 p-2 border-b border-cyan-500/20 flex justify-between items-center">
                  <h3 className="text-cyan-400 font-mono tracking-widest text-sm uppercase flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    {selectedFile ? selectedFile.split('/').pop() : 'Visual_Link.png'}
                  </h3>
                  {imageFiles.length > 1 && (
                    <div className="flex gap-2">
                      <button
                        onClick={prevImage}
                        className="p-1 bg-slate-800/50 rounded hover:bg-cyan-950/50 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5 text-cyan-400" />
                      </button>
                      <span className="px-2 py-1 text-xs text-cyan-300 font-mono">
                        {currentImageIndex + 1} / {imageFiles.length}
                      </span>
                      <button
                        onClick={nextImage}
                        className="p-1 bg-slate-800/50 rounded hover:bg-cyan-950/50 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5 text-cyan-400" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-black/40 min-h-[300px] md:min-h-[500px] flex items-center justify-center">
                  <div className="relative w-full h-full rounded overflow-hidden border border-slate-700/50">
                    {selectedFile ? (
                      isVideo(selectedFile) ? (
                        <video
                          src={selectedFile}
                          controls
                          preload="metadata"
                          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                          aria-label={`Video preview of ${project.title}`}
                        />
                      ) : isImage(selectedFile) ? (
                      <img
                        src={selectedFile}
                        alt={`${project.title} screenshot ${currentImageIndex + 1} of ${imageFiles.length}`}
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
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

              {/* Project Essay/Description - THE MAIN DETAILED SECTION */}
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-l-4 border-cyan-400 rounded-r-lg p-8 md:p-10 shadow-[0_0_30px_rgba(6,182,212,0.25),0_0_20px_rgba(236,72,153,0.2)]">
                <h2 className="text-2xl md:text-3xl font-mono tracking-wider mb-8 text-cyan-300 uppercase flex items-center gap-3">
                  <BookOpen className="w-7 h-7" />
                  {isCertificate ? 'About This Certification' : 'Project Deep Dive'}
                </h2>
                
                {/* This is where your essay content goes */}
                <div className="prose prose-lg prose-invert prose-cyan max-w-none text-cyan-200">
                  {/* Custom prose styles for better essay formatting */}
                  <style jsx>{`
                    .prose h3 {
                      color: #67e8f9;
                      font-family: 'Courier New', monospace;
                      font-size: 1.5rem;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                      font-weight: 600;
                      letter-spacing: 0.05em;
                      text-transform: uppercase;
                    }
                    .prose h4 {
                      color: #a5f3fc;
                      font-size: 1.25rem;
                      margin-top: 1.5rem;
                      margin-bottom: 0.75rem;
                      font-weight: 500;
                    }
                    .prose p {
                      color: #cbd5e1;
                      line-height: 1.8;
                      margin-bottom: 1.25rem;
                    }
                    .prose strong {
                      color: #e0f2fe;
                      font-weight: 600;
                    }
                    .prose em {
                      color: #f0abfc;
                    }
                    .prose ul, .prose ol {
                      margin-top: 1rem;
                      margin-bottom: 1rem;
                    }
                    .prose li {
                      color: #cbd5e1;
                      margin-bottom: 0.5rem;
                    }
                    .prose blockquote {
                      border-left: 4px solid #06b6d4;
                      padding-left: 1rem;
                      color: #94a3b8;
                      font-style: italic;
                    }
                  `}</style>
                  
                  {renderEssayContent(project.description)}
                  
                  {/* If there's additional detailed content */}
                  {project.details && (
                    <div className="mt-8 pt-8 border-t border-slate-700/50">
                      {renderEssayContent(project.details)}
                    </div>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              {(project.tech || project.technologies || project.year) && (project.tech?.length > 0 || project.technologies?.length > 0 || project.year) && (
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-fuchsia-500/30 rounded-lg p-6 md:p-8 shadow-[0_0_15px_rgba(217,70,239,0.1)] text-white">
                  <h2 className="text-xl md:text-2xl font-mono tracking-wider mb-6 text-white flex items-center gap-3 uppercase">
                    <Code2 className="w-6 h-6 text-fuchsia-400" />
                    {isCertificate ? 'Skills Covered' : 'Technologies & Tools'}
                  </h2>
                  
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {(project.tech || project.technologies)?.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full text-sm font-medium font-mono bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 text-white border border-fuchsia-500/30 hover:border-fuchsia-400/50 hover:shadow-[0_0_10px_rgba(217,70,239,0.3)] transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.year && !isCertificate && (
                        <span className="px-4 py-2 rounded-full text-sm font-medium font-mono bg-gradient-to-r from-cyan-500/20 to-slate-900/30 text-cyan-100 border border-cyan-400/30 uppercase tracking-widest">
                          Year {project.year}
                        </span>
                      )}
                    </div>
                    {isCertificate && project.year && (
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/10 text-cyan-100 border border-cyan-400/40 rounded-full">
                          Issued {project.year}
                        </span>
                      </div>
                    )}
                  </div>
              )}

              {/* Project Metadata */}
              {!isCertificate && project.client && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.client && (
                    <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-fuchsia-500/30 rounded-lg p-5 shadow-[0_0_10px_rgba(217,70,239,0.1)] text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-fuchsia-400" />
                        <span className="text-xs text-fuchsia-300/60 uppercase tracking-wider font-mono">Client</span>
                      </div>
                      <p className="text-lg text-white font-light">{project.client}</p>
                    </div>
                  )}
                </div>
              )}


              {/* Features Section */}
                {!isCertificate && project.features && project.features.length > 0 && (
                  <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-500/30 rounded-lg p-8 md:p-10 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
                    <h2 className="text-2xl md:text-3xl font-mono tracking-wider mb-8 text-white border-b border-slate-700 pb-4 uppercase flex items-center gap-3">
                      <Zap className="w-7 h-7 text-cyan-400" />
                      Core Features
                    </h2>
                    <ul className="space-y-4">
                    {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-cyan-200">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                        <p className="text-base md:text-lg leading-relaxed">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Target Audience */}
                {!isCertificate && project.targetAudience && (
                  <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-fuchsia-500/30 rounded-lg p-8 md:p-10 shadow-[0_0_25px_rgba(217,70,239,0.25)]">
                    <h2 className="text-2xl md:text-3xl font-mono tracking-wider mb-8 text-white border-b border-slate-700 pb-4 uppercase flex items-center gap-3">
                      <Users className="w-7 h-7 text-fuchsia-400" />
                    Target Audience
                  </h2>
                  <p className="text-fuchsia-100 text-base md:text-lg leading-relaxed">{project.targetAudience}</p>
                </div>
              )}

              {/* Challenges */}
                {!isCertificate && project.challenges && project.challenges.length > 0 && (
                  <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-500/30 rounded-lg p-8 md:p-10 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
                  <h2 className="text-2xl md:text-3xl font-mono tracking-wider mb-8 text-white border-b border-slate-700 pb-4 uppercase flex items-center gap-3">
                    <Target className="w-7 h-7 text-cyan-400" />
                    Challenges Faced
                  </h2>
                    <ul className="space-y-4">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-fuchsia-100">
                          <div className="w-2 h-2 rounded-full bg-fuchsia-400 mt-2 flex-shrink-0"></div>
                          <p className="text-base md:text-lg leading-relaxed">{challenge}</p>
                        </li>
                      ))}
                    </ul>
                </div>
              )}

              {/* Learning Outcomes */}
              {!isCertificate && project.learningOutcomes && project.learningOutcomes.length > 0 && (
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-fuchsia-500/30 rounded-lg p-8 md:p-10 shadow-[0_0_25px_rgba(217,70,239,0.25)]">
                  <h2 className="text-2xl md:text-3xl font-mono tracking-wider mb-8 text-white border-b border-slate-700 pb-4 uppercase flex items-center gap-3">
                    <TrendingUp className="w-7 h-7 text-fuchsia-400" />
                    Learning Outcomes
                  </h2>
                    <ul className="space-y-4">
                      {project.learningOutcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-cyan-200">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                          <p className="text-base md:text-lg leading-relaxed">{outcome}</p>
                        </li>
                      ))}
                    </ul>
                </div>
              )}

              {/* Future Improvements */}
              {!isCertificate && project.futureImprovements && project.futureImprovements.length > 0 && (
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-500/30 rounded-lg p-8 md:p-10 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
                  <h2 className="text-2xl md:text-3xl font-mono tracking-wider mb-8 text-white border-b border-slate-700 pb-4 uppercase flex items-center gap-3">
                    <Lightbulb className="w-7 h-7 text-cyan-400" />
                    Future Improvements
                  </h2>
                    <ul className="space-y-4">
                      {project.futureImprovements.map((improvement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-fuchsia-100">
                          <div className="w-2 h-2 rounded-full bg-fuchsia-400 mt-2 flex-shrink-0"></div>
                          <p className="text-base md:text-lg leading-relaxed">{improvement}</p>
                        </li>
                      ))}
                    </ul>
                </div>
              )}

              {/* Role */}
              {!isCertificate && project.role && (
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-fuchsia-500/30 rounded-lg p-8 md:p-10 shadow-[0_0_25px_rgba(217,70,239,0.25)]">
                  <h2 className="text-2xl md:text-3xl font-mono tracking-wider mb-8 text-white border-b border-slate-700 pb-4 uppercase flex items-center gap-3">
                    <Briefcase className="w-7 h-7 text-fuchsia-400" />
                    Role in Project
                  </h2>
                  <p className="text-cyan-200 text-base md:text-lg leading-relaxed">{project.role}</p>
                </div>
              )}

              {/* Project Link */}
              {project.link && (
                <div className="flex justify-center pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full text-white text-lg font-medium font-mono tracking-wider uppercase hover:from-cyan-400 hover:to-fuchsia-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>{isCertificate ? 'View Certificate' : 'View Live Project'}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Right Column - Files */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-slate-900/80 border border-fuchsia-500/30 rounded-lg p-1 relative shadow-[0_0_15px_rgba(217,70,239,0.15)]">
                <div className="bg-fuchsia-950/20 p-2 border-b border-fuchsia-500/20 mb-2">
                  <h3 className="text-fuchsia-400 font-mono tracking-widest text-sm uppercase">
                    {isCertificate ? 'Certificate Files' : 'Project Files'}
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {project.files && project.files.length > 0 ? (
                    project.files.map((file, idx) => {
                      const Icon = getFileIcon(file.type);
                      return (
                        <motion.div
                          key={`${file.name}-${idx}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          onClick={() => handleFileClick(file)}
                          className="flex items-start gap-3 p-3 border border-cyan-500/30 rounded bg-slate-950/50 hover:border-cyan-400 hover:bg-cyan-950/20 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all cursor-pointer group"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && handleFileClick(file)}
                          aria-label={`${file.type}: ${file.name}`}
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
                    <div className="text-cyan-200/70 text-sm text-center py-8">No files attached.</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="h-12" />
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectPage;
