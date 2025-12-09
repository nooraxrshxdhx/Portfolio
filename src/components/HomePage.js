import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Code, Palette, Mail } from 'lucide-react';
import '@google/model-viewer';
export function HomePage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm GENA BOT, your digital guide. What would you like to explore today?",
      options: [
        { text: "Tell me about the developer", action: "about" },
        { text: "Show me some projects", action: "portfolio" },
        { text: "How can I get in touch?", action: "contact" },
        { text: "What technologies are used here?", action: "tech" }
      ]
    }
  ]);

  const [showTyping, setShowTyping] = useState(false);

  const handleOptionClick = (action, optionText) => {
    // Add user's choice
    const userMessage = {
      id: Date.now(),
      text: optionText,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);

    // Show typing indicator
    setShowTyping(true);

    // Generate GENA BOT's response based on action
    setTimeout(() => {
      setShowTyping(false);
      let genaResponse;

      switch (action) {
        case 'about':
          genaResponse = {
            id: Date.now(),
            text: "She's a Full Stack Developer & UI Designer with expertise across web development, mobile apps, and design tools. Her skills include React, Node.js, Python, and creative tools like Photoshop and Figma.",
            options: [
              { text: "View full skill set", action: "skills" },
              { text: "See her work", action: "portfolio" },
              { text: "Something else", action: "menu" }
            ]
          };
          break;
        case 'portfolio':
          genaResponse = {
            id: Date.now(),
            text: "The portfolio section features projects organized like a hi-tech data center. Each project folder contains detailed information, images, and links. Ready to explore?",
            options: [
              { text: "Take me to Portfolio", action: "nav-portfolio" },
              { text: "Learn about her background", action: "about" },
              { text: "Ask something else", action: "menu" }
            ]
          };
          break;
        case 'contact':
          genaResponse = {
            id: Date.now(),
            text: "You can reach out through the contact form or connect via social media. She's always open to discussing new projects and opportunities!",
            options: [
              { text: "Go to Contact page", action: "nav-contact" },
              { text: "See her work first", action: "portfolio" },
              { text: "Back to menu", action: "menu" }
            ]
          };
          break;
        case 'tech':
          genaResponse = {
            id: Date.now(),
            text: "This site is built with React, TypeScript, Tailwind CSS, and Motion for animations. It showcases modern web development with a cyberpunk aesthetic featuring cyan and magenta colors with holographic effects.",
            options: [
              { text: "View technical skills", action: "skills" },
              { text: "See projects", action: "portfolio" },
              { text: "Ask something else", action: "menu" }
            ]
          };
          break;
        case 'skills':
          genaResponse = {
            id: Date.now(),
            text: "Her expertise includes React.js, Express.js, React Native, HTML, CSS, JavaScript, Python, MongoDB, MySQL, plus design tools like Photoshop, Illustrator, Figma, and analytics tools like Power BI and Tableau.",
            options: [
              { text: "View About page", action: "nav-about" },
              { text: "See her projects", action: "portfolio" },
              { text: "Get in touch", action: "contact" }
            ]
          };
          break;
        case 'menu':
          genaResponse = {
            id: Date.now(),
            text: "What would you like to know?",
            options: [
              { text: "About the developer", action: "about" },
              { text: "View projects", action: "portfolio" },
              { text: "Contact info", action: "contact" },
              { text: "Tech stack", action: "tech" }
            ]
          };
          break;
        default:
          genaResponse = {
            id: Date.now(),
            text: "I'm here to help! What would you like to explore?",
            options: [
              { text: "About", action: "about" },
              { text: "Portfolio", action: "portfolio" },
              { text: "Contact", action: "contact" }
            ]
          };
      }

      setMessages(prev => [...prev, genaResponse]);
    }, 1000);
  };

  const handleNavClick = (page) => {
    // Navigate to the appropriate page
    if (page === 'nav-about') {
      navigate('/about');
    } else if (page === 'nav-portfolio') {
      navigate('/portfolio');
    } else if (page === 'nav-contact') {
      navigate('/contact');
    }
  };

  return (
    <div className="container mx-auto px-2 md:px-4 py-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Holographic Rectangle Container */}
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-lg blur-xl"></div>
          
          {/* Main holographic frame */}
          <div className="relative bg-slate-900/80 backdrop-blur-sm border-2 border-cyan-400/50 rounded-lg overflow-hidden">

            {/* Tech grid pattern */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}
            ></div>

            {/* Content Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-8">
              {/* Left side - 3D Model Area */}
              <div className="flex flex-col">
                <div className="relative bg-slate-800/50 border border-cyan-400/30 rounded-lg p-4 md:p-6 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                    <h3 className="text-cyan-400 tracking-wider text-sm md:text-base">GENA BOT INTERFACE</h3>
                  </div>
                     
                  {/* 3D Model Container link: "https://models.readyplayer.me/6926ff38fb99478e41adf1a5.glb" */}
                    
                  <div className="relative flex-1 min-h-[300px] md:min-h-[400px] bg-slate-900/50 rounded-lg border border-cyan-400/20 overflow-hidden flex items-center justify-center">
                    {/* Holographic grid background */}
                    <div className="absolute inset-0"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px'
                      }}
                      
                    >
  <model-viewer
    src="https://models.readyplayer.me/6926ff38fb99478e41adf1a5.glb"
    alt="3D avatar"
    auto-rotate

    style={{ width: '100%', height: '100%', maxWidth: '400px', maxHeight: '400px' }}
  ></model-viewer>

                    </div>

                    {/* Scanning lines */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-20"
                      animate={{ y: [0, 400, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Status indicators */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-cyan-400"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="mt-4 flex items-center justify-between px-3 md:px-4 py-2 bg-cyan-950/30 border border-cyan-400/30 rounded">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-green-400"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-cyan-300 text-xs md:text-sm">ONLINE</span>
                    </div>
                    <span className="text-cyan-400/50 text-xs tracking-wider">SYSTEM ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Right side - Chat Interface */}
              <div className="flex flex-col">
                <div className="relative bg-slate-800/50 border border-fuchsia-400/30 rounded-lg p-4 md:p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-400 flex items-center justify-center">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-900 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      </div>
                    </div>
                    <h3 className="text-fuchsia-400 tracking-wider text-sm md:text-base">GENA BOT CHAT</h3>
                  </div>

                  {/* Messages area */}
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2" style={{ maxHeight: '400px', minHeight: '300px' }}>
                    <AnimatePresence>
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, x: message.isUser ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[85%] ${message.isUser ? 'order-2' : 'order-1'}`}>
                            {/* Message bubble */}
                            <div
                              className={`relative rounded-lg p-3 md:p-4 ${
                                message.isUser
                                  ? 'bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white'
                                  : 'bg-gradient-to-br from-slate-700 to-slate-800 border border-cyan-400/30 text-cyan-100'
                              }`}
                            >
                              <p className="text-sm md:text-base">{message.text}</p>
                            </div>

                            {/* Options */}
                            {message.options && !message.isUser && (
                              <div className="mt-3 space-y-2">
                                {message.options.map((option, idx) => (
                                  <motion.button
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => {
                                      if (option.action.startsWith('nav-')) {
                                        handleNavClick(option.action);
                                      } else {
                                        handleOptionClick(option.action, option.text);
                                      }
                                    }}
                                    className="w-full px-3 md:px-4 py-2 bg-slate-900/50 border border-cyan-400/30 rounded text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 text-left text-xs md:text-sm flex items-center gap-2"
                                  >
                                    {option.action === 'about' && <Code className="w-4 h-4" />}
                                    {option.action === 'portfolio' && <Palette className="w-4 h-4" />}
                                    {option.action === 'contact' && <Mail className="w-4 h-4" />}
                                    {option.action === 'nav-portfolio' && <Palette className="w-4 h-4" />}
                                    {option.action === 'nav-contact' && <Mail className="w-4 h-4" />}
                                    {option.action === 'nav-about' && <Code className="w-4 h-4" />}
                                    <span>{option.text}</span>
                                  </motion.button>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Typing indicator */}
                    {showTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="px-4 py-3 bg-gradient-to-br from-slate-700 to-slate-800 border border-cyan-400/30 rounded-lg">
                          <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-cyan-400"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Info text */}
                  <div className="text-center text-cyan-400/50 text-xs">
                    Click options to interact with GENA BOT
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}