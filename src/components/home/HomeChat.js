import { motion, AnimatePresence } from 'motion/react';
import { Code, Palette, Mail, MessageCircle, Sparkles } from 'lucide-react';

function getOptionIcon(icon) {
  if (icon === "code") return <Code className="w-4 h-4" />;
  if (icon === "palette") return <Palette className="w-4 h-4" />;
  if (icon === "mail") return <Mail className="w-4 h-4" />;
  return <Sparkles className="w-4 h-4" />;
}

export function HomeChat({
  messages,
  activeMessageId,
  showTyping,
  onOptionClick,
  hoveredOption,
  setHoveredOption,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="relative"
    >
      <div className="relative bg-slate-800/50 border border-fuchsia-400/30 rounded-lg p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400" />
          <h3 className="text-fuchsia-400 tracking-wider text-base md:text-lg">CHAT WITH ARSHADHA</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="overflow-y-auto space-y-4 mb-4 pr-2 h-64 md:h-80"
        >
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, x: message.isUser ? 20 : -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] ${message.isUser ? 'order-2' : 'order-1'}`}>
                  <motion.div
                    className={`relative rounded-lg p-3 md:p-4 ${
                      message.isUser
                        ? 'bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white'
                        : 'bg-gradient-to-br from-slate-700 to-slate-800 border border-cyan-400/30 text-cyan-100'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-sm md:text-base">{message.text}</p>
                  </motion.div>

                  {message.options && !message.isUser && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="mt-3 space-y-2"
                    >
                      {message.options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          initial={{ opacity: 0, x: -20, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                          whileHover={{
                            scale: 1.02,
                            borderColor: "rgb(34, 211, 238)",
                            backgroundColor: "rgba(34, 211, 238, 0.1)",
                            boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => onOptionClick(option, message.id)}
                          disabled={message.id !== activeMessageId}
                          onMouseEnter={() => setHoveredOption(idx)}
                          onMouseLeave={() => setHoveredOption(null)}
                          className="w-full px-3 md:px-4 py-2 bg-slate-900/50 border border-cyan-400/30 rounded text-cyan-300 hover:border-cyan-400 transition-all duration-200 text-left text-xs md:text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
                            animate={hoveredOption === idx ? { x: ["-100%", "100%"] } : {}}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          />
                          <motion.div
                            animate={hoveredOption === idx ? { rotate: [0, 5, -5, 0] } : {}}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {getOptionIcon(option.icon)}
                          </motion.div>
                          <span className="relative z-10">{option.text}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {showTyping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <motion.div
                className="px-4 py-3 bg-gradient-to-br from-slate-700 to-slate-800 border border-cyan-400/30 rounded-lg"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(34, 211, 238, 0)",
                    "0 0 20px rgba(34, 211, 238, 0.3)",
                    "0 0 0 rgba(34, 211, 238, 0)"
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-cyan-400"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.4 }}
          className="text-center text-cyan-400/50 text-xs"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            💬 Click options to explore
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
