/**
 * Chat flow nodes and options for the home page conversation.
 */
export const FLOW = {
  menu: {
    text: "Hi, I'm Arshadha. What would you like to explore today?",
    options: [
      { text: "Tell me about you", type: "node", target: "about_intro", icon: "code" },
      { text: "Show me your projects", type: "node", target: "portfolio_intro", icon: "palette" },
      { text: "How can I get in touch?", type: "node", target: "contact_intro", icon: "mail" },
      { text: "What technologies are you using?", type: "node", target: "tech_intro", icon: "sparkles" }
    ]
  },
  about_intro: {
    text: "I build web and mobile experiences. Want to know more?",
    options: [
      { text: "Show key skills", type: "node", target: "about_skills", icon: "code" },
      { text: "Her journey in short", type: "node", target: "about_story", icon: "sparkles" },
      { text: "Back to menu", type: "node", target: "menu", icon: "sparkles" }
    ]
  },
  about_skills: {
    text: "Core stack: React, Node.js, Python, HTML/CSS/JS, MongoDB/MySQL. Design: Figma, Photoshop, Illustrator. Data: Power BI, Tableau.",
    options: [
      { text: "Go to About page", type: "nav", target: "/about", icon: "code" },
      { text: "See projects next", type: "node", target: "portfolio_intro", icon: "palette" },
      { text: "Back to menu", type: "node", target: "menu", icon: "sparkles" }
    ]
  },
  about_story: {
    text: "I'm a Republic Polytechnic student studying Diploma in Information Technology. I build user-centric digital solutions with a design-first mindset.",
    options: [
      { text: "Go to About page", type: "nav", target: "/about", icon: "code" },
      { text: "See projects next", type: "node", target: "portfolio_intro", icon: "palette" },
      { text: "Back to menu", type: "node", target: "menu", icon: "sparkles" }
    ]
  },
  portfolio_intro: {
    text: "Projects are organized like an archive, showcasing design and development work across various domains.",
    options: [
      { text: "Show highlights", type: "node", target: "portfolio_highlights", icon: "palette" },
      { text: "Go to Portfolio", type: "nav", target: "/portfolio", icon: "palette" },
      { text: "Back to menu", type: "node", target: "menu", icon: "sparkles" }
    ]
  },
  portfolio_highlights: {
    text: "You'll see UI/UX-driven apps, full-stack builds, and immersive experiences. Each project includes details, media, and links.",
    options: [
      { text: "Open Portfolio", type: "nav", target: "/portfolio", icon: "palette" },
      { text: "Ask about tech", type: "node", target: "tech_intro", icon: "sparkles" },
      { text: "Back to menu", type: "node", target: "menu", icon: "sparkles" }
    ]
  },
  contact_intro: {
    text: "Best way to connect is the contact form or socials. Want to reach out now?",
    options: [
      { text: "Go to Contact", type: "nav", target: "/contact", icon: "mail" },
      { text: "See projects first", type: "node", target: "portfolio_intro", icon: "palette" },
      { text: "Back to menu", type: "node", target: "menu", icon: "sparkles" }
    ]
  },
  tech_intro: {
    text: "This site uses React, Tailwind CSS, Motion for animations, and a sci-fi aesthetic.",
    options: [
      { text: "More tech details", type: "node", target: "tech_details", icon: "sparkles" },
      { text: "See projects", type: "node", target: "portfolio_intro", icon: "palette" },
      { text: "Back to menu", type: "node", target: "menu", icon: "sparkles" }
    ]
  },
  tech_details: {
    text: "Tech focuses on responsive UI, animated micro-interactions, and clean component structure to keep the experience fast and smooth.",
    options: [
      { text: "Go to Portfolio", type: "nav", target: "/portfolio", icon: "palette" },
      { text: "Get in touch", type: "node", target: "contact_intro", icon: "mail" },
      { text: "Back to menu", type: "node", target: "menu", icon: "sparkles" }
    ]
  }
};
