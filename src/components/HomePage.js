import { useState, useEffect } from 'react';
import { motion,  } from 'motion/react';
import { useNavigate } from 'react-router';

import { FLOW } from './home/flowData';
import { HomeChat } from './home/HomeChat';
import { SkillCarousel } from './home/SkillCarousel';

export function HomePage() {
  const navigate = useNavigate();
  const [hoveredOption, setHoveredOption] = useState(null);

  // Typing animation for hero title
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "HI I'M ARSHADHA";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);


  const createBotMessage = (nodeId) => ({
    id: Date.now(),
    text: FLOW[nodeId].text,
    options: FLOW[nodeId].options
  });

  const [initialMessage] = useState(() => createBotMessage("menu"));
  const [messages, setMessages] = useState(() => [initialMessage]);
  const [activeMessageId, setActiveMessageId] = useState(() => initialMessage.id);
  const [showTyping, setShowTyping] = useState(false);

  const handleOptionClick = (option, messageId) => {
    if (messageId !== activeMessageId) return;

    const userMessage = {
      id: Date.now(),
      text: option.text,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setShowTyping(true);

    setTimeout(() => {
      setShowTyping(false);
      if (option.type === "nav") {
        navigate(option.target);
        const freshMenu = createBotMessage("menu");
        setMessages([freshMenu]);
        setActiveMessageId(freshMenu.id);
        return;
      }
      if (option.type === "node" && FLOW[option.target]) {
        const genaResponse = createBotMessage(option.target);
        setMessages(prev => [...prev, genaResponse]);
        setActiveMessageId(genaResponse.id);
        return;
      }
      const fallback = createBotMessage("menu");
      setMessages(prev => [...prev, fallback]);
      setActiveMessageId(fallback.id);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-start justify-center px-4 md:px-8 pt-32 overflow-hidden">
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center h-full flex flex-col justify-end pb-48">
          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              style={{
                fontSize: 'clamp(3rem, 10vw, 7rem)',
                fontWeight: 'bold',
                marginBottom: '2rem',
                lineHeight: '1.1',
                background: 'linear-gradient(to right, rgb(34, 211, 238), rgb(236, 72, 153), rgb(34, 211, 238))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {displayedText}
            </h1>
          </motion.div>

          {/* Subtitle/Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl mb-6" style={{ color: 'rgba(103, 232, 249, 1)' }}>
              Full Stack Developer & UI Designer
            </p>

          </motion.div>

          {/* Tech indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <SkillCarousel />
          </motion.div>

          
        </div>
      </section>

      {/* Chat Section */}
      <section id="chat-section" className="relative min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="container mx-auto px-2 md:px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-lg blur-xl"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(34, 211, 238, 0.3)",
                    "0 0 60px rgba(236, 72, 153, 0.3)",
                    "0 0 30px rgba(34, 211, 238, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative bg-slate-900/80 backdrop-blur-sm border-2 border-cyan-400/50 rounded-lg overflow-hidden"
                whileHover={{
                  borderColor: "rgb(34, 211, 238)",
                  boxShadow: "0 0 40px rgba(34, 211, 238, 0.4)"
                }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="relative p-4 md:p-8"
                >
                  <HomeChat
                    messages={messages}
                    activeMessageId={activeMessageId}
                    showTyping={showTyping}
                    onOptionClick={handleOptionClick}
                    hoveredOption={hoveredOption}
                    setHoveredOption={setHoveredOption}
                  />
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}