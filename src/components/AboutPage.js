import { motion } from 'motion/react';
import { Code, Palette, Database, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Web Development',
    icon: Code,
    color: 'cyan',
    skills: [
      { name: 'React.js' },
      { name: 'Express.js' },
      { name: 'React Native' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' }
    ]
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    color: 'fuchsia',
    skills: [
      { name: 'Photoshop' },
      { name: 'Illustrator' },
      { name: 'Figma' },
      { name: 'Canva' }
    ]
  },
  {
    title: 'Backend & Database',
    icon: Database,
    color: 'purple',
    skills: [
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'Python' }
    ]
  },
  {
    title: 'Business Analytics',
    icon: BarChart3,
    color: 'pink',
    skills: [
      { name: 'Power BI' },
      { name: 'Tableau' }
    ]
  }
];

export function AboutPage() {
  return (
    <div className="container mx-auto px-2 md:px-4 py-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-8 md:mb-12"
        >
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 rounded-lg blur-xl"></div>
          <div className="relative bg-slate-900/80 backdrop-blur-sm border-2 border-cyan-400/50 rounded-lg overflow-hidden">

            <div className="relative p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-400 p-1 mb-4">
                <img
                  src="/ProfileImg.jpg"  
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
               />
              </div>
                <h2 className="text-cyan-400 tracking-wider text-lg md:text-xl mb-2">DEVELOPER PROFILE</h2>
                <p className="text-cyan-100/70 text-xs md:text-sm">Full Stack Developer & UI Designer</p>
              </div>

              <div className="md:col-span-2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-cyan-100/80 leading-relaxed space-y-4"
                >
              <p className="text-sm md:text-base">
                  I'm a student based in Singapore, currently studying Design and Development. My interests span across building apps, websites, and games, where I enjoy combining creativity with technical problem‑solving. As an avid gamer, I’m especially passionate about game development and eager to deepen my knowledge in this field.
              </p>
              <p className="text-sm md:text-base">
                  Beyond coding, I explore digital design to bring ideas to life with engaging visuals and user‑friendly experiences. I would describe myself as laid‑back and adaptable, yet motivated to take on new opportunities and challenges. I’m committed to learning continuously and growing both as a developer and designer.
              </p>
                </motion.div>
              </div>
            </div>

            
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            // Explicit color classes for consistent styling
            const colorClasses = {
              cyan: {
                glow: 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/5',
                iconBg: 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/10',
                iconColor: 'text-cyan-400',
                dot: 'bg-cyan-400/50'
              },
              fuchsia: {
                glow: 'bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-500/5',
                iconBg: 'bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-500/10',
                iconColor: 'text-fuchsia-400',
                dot: 'bg-fuchsia-400/50'
              },
              purple: {
                glow: 'bg-gradient-to-br from-purple-500/20 to-purple-500/5',
                iconBg: 'bg-gradient-to-br from-purple-500/20 to-purple-500/10',
                iconColor: 'text-purple-400',
                dot: 'bg-purple-400/50'
              },
              pink: {
                glow: 'bg-gradient-to-br from-pink-500/20 to-pink-500/5',
                iconBg: 'bg-gradient-to-br from-pink-500/20 to-pink-500/10',
                iconColor: 'text-pink-400',
                dot: 'bg-pink-400/50'
              }
            };
            
            const colors = colorClasses[category.color];
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + categoryIndex * 0.1 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 ${colors.glow} rounded-lg blur group-hover:blur-md transition-all duration-300`}></div>
                
                <div className="relative bg-slate-800/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 ${colors.iconBg} rounded-lg`}>
                      <IconComponent className={`w-6 h-6 ${colors.iconColor}`} />
                    </div>
                    <h3 className="text-xl text-cyan-100">{category.title}</h3>
                  </div>
                  
                  {/* Skills */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="bg-slate-900/50 rounded px-3 py-2 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-200"
                        >
                          <span className="text-cyan-200 text-sm">{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Tech decoration */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}