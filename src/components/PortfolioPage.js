import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Folder } from 'lucide-react';
import * as ProjectData from './projects';

const projects = [
  ProjectData.BrandIdentity,
  ProjectData.EcommerceWireframe,
  ProjectData.VRGame,
  ProjectData.HackerRankReactCert
];

const categories = ['All', 'Design', 'Development', 'Certification'];

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-2 md:px-4 py-6 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            PROJECT ARCHIVE
          </h1>
          <div className="h-1 w-24 md:w-32 mx-auto bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full"></div>

        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full border transition-all duration-300 text-xs md:text-sm ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 border-cyan-400 text-white'
                  : 'bg-slate-800/50 border-cyan-400/30 text-cyan-300 hover:border-cyan-400/60'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Data center background */}
        <div className="relative">
          {/* Project files grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProjects.map((project, index) => (
              <Link to={`/project/${project.id}`} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="cursor-pointer group perspective-1000 h-full"
                >
                  <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-400/50 rounded-lg p-4 md:p-6 hover:border-fuchsia-400 transition-all duration-300 transform-gpu"
                    style={{
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* File folder icon */}
                    <div className="flex flex-col items-center mb-4">
                      <Folder className="w-16 h-16 md:w-20 md:h-20 text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-300" strokeWidth={1.5} />
                      <div className="mt-2 px-2 md:px-3 py-1 bg-cyan-950/50 border border-cyan-400/50 rounded text-xs text-cyan-300">
                        {project.category}
                      </div>
                    </div>

                    {/* Project title */}
                    <h3 className="text-center text-cyan-100 mb-2 text-sm md:text-base">{project.title}</h3>
                    
                    {/* File count */}
                    <div className="text-center text-cyan-400/60 text-xs md:text-sm">
                      {project.files.length} files
                    </div>

                    {/* Holographic effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-fuchsia-500/0 group-hover:from-cyan-500/10 group-hover:to-fuchsia-500/10 rounded-lg transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}