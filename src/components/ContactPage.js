import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Instagram, Send, CheckCircle, ArrowRight } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form)
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/arshadha-noor-mohamed-8196ba339/',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:border-blue-400',
      handle: 'arshadha-noor-mohamed'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/xrshxdhx.__/',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:border-pink-400',
      handle: 'xrshxdhx.__'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:arshadhanoormohamed@gmail.com',
      color: 'from-cyan-500 to-teal-600',
      hoverColor: 'hover:border-cyan-400',
      handle: 'arshadhanoormohamed@gmail.com'
    }
  ];

  return (
    <div className="container mx-auto px-2 md:px-4 py-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Contact Me
          </h1>
          <div className="h-1 w-24 md:w-32 mx-auto bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-lg blur-lg"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm border-2 border-cyan-400/50 rounded-lg p-4 md:p-8">
                <h2 className="text-xl md:text-2xl mb-4 md:mb-6 text-cyan-100">Send Message</h2>
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  {/* Hidden Web3Forms fields */}
                  <input type="hidden" name="access_key" value="8acf85fe-3b9d-4bf8-ad7a-ea22ab6a3808" />
                  <input type="hidden" name="redirect" value={`${window.location.origin}/thank-you`} />

                  {/* Name field */}
                  <div>
                    <label className="block text-cyan-300 mb-2 text-xs md:text-sm">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-cyan-400/30 rounded-lg px-3 md:px-4 py-2 md:py-3 text-cyan-100 placeholder-cyan-400/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-cyan-300 mb-2 text-xs md:text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-cyan-400/30 rounded-lg px-3 md:px-4 py-2 md:py-3 text-cyan-100 placeholder-cyan-400/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm md:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-cyan-300 mb-2 text-xs md:text-sm">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-slate-900/50 border border-cyan-400/30 rounded-lg px-3 md:px-4 py-2 md:py-3 text-cyan-100 placeholder-cyan-400/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none text-sm md:text-base"
                      placeholder="Enter your message..."
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                        {isSubmitting ? "Sending..." : "Transmit Message"}
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Success message */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 bg-green-500/20 border border-green-400/50 rounded-lg p-4"
                    >
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle className="w-5 h-5" />
                        <span>Message successfully transmitted! I'll get back to you soon.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-full">
              <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 rounded-lg blur-lg"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm border-2 border-fuchsia-400/50 rounded-lg p-4 md:p-8 h-full flex flex-col">
                <h2 className="text-xl md:text-2xl mb-4 md:mb-6 text-cyan-100">Connect</h2>
                <div className="space-y-3 md:space-y-4 flex-1">
                  {socialLinks.map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-center gap-3 md:gap-4 bg-slate-900/50 border border-cyan-400/30 rounded-lg p-3 md:p-4 hover:border-fuchsia-400 hover:bg-fuchsia-500/10 transition-all duration-300 group"
                      >
                        <div className={`p-2 md:p-3 bg-gradient-to-br ${social.color} rounded-lg`}>
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-cyan-100 text-sm md:text-base">{social.name}</div>
                          <div className="text-cyan-400/60 text-xs md:text-sm">{social.handle}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
