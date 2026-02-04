import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';

// Skills from AboutPage
const allSkills = [
  'React.js', 'Express.js', 'React Native', 'HTML', 'CSS', 'JavaScript',
  'Photoshop', 'Illustrator', 'Figma', 'Canva',
  'MongoDB', 'MySQL', 'Python',
  'Power BI', 'Tableau'
];

export function SkillCarousel() {
  // Duplicate skills for seamless loop
  const duplicatedSkills = useMemo(() => [...allSkills, ...allSkills], []);
  const trackRef = useRef(null);
  const [loopWidth, setLoopWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;

    const updateWidth = () => {
      if (trackRef.current) {
        setLoopWidth(trackRef.current.offsetWidth);
      }
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(trackRef.current);

    return () => observer.disconnect();
  }, []);

  const speed = 40; // px per second (slow)
  const duration = loopWidth > 0 ? loopWidth / speed : 0;

  return (
    <div className="relative w-full h-20 flex items-center justify-center">
      {/* Conveyor belt container */}
      <div className="relative w-full h-16 overflow-hidden">
        <motion.div
          className="absolute flex items-center gap-4 whitespace-nowrap"
          animate={loopWidth > 0 ? { x: [0, -loopWidth] } : {}}
          transition={{
            duration: duration || 0,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div ref={trackRef} className="flex items-center gap-4">
            {allSkills.map((skill) => (
              <motion.div
                key={`first-${skill}`}
                className="flex-shrink-0"
                whileHover={{
                  scale: 1.1,
                  borderColor: 'rgb(236, 72, 153)'
                }}
              >
                <div
                  className="px-4 py-2 border rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border-cyan-400 text-cyan-100 shadow-lg shadow-cyan-400/30"
                >
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={`dup-${skill}-${index}`}
              className="flex-shrink-0"
              whileHover={{
                scale: 1.1,
                borderColor: 'rgb(236, 72, 153)'
              }}
            >
              <div
                className="px-4 py-2 border rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border-cyan-400 text-cyan-100 shadow-lg shadow-cyan-400/30"
              >
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Glow effect that follows the center */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          animate={{
            background: [
              'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)'
          }}
        />
      </div>
    </div>
  );
}
