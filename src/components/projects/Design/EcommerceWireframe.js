export const EcommerceWireframe = {
  id: 3,
  title: 'EcoLine, An E-commerce Website Wireframe Design',
  category: 'Design',
  year: '2025',
  description:
    'For this project, I created high-fidelity wireframes and a prototype for a sustainable fashion e-commerce website. I wanted to show that sustainable clothing can be vibrant and fun, not just plain or serious. I focused on bringing the brand’s story and ethics into the design, highlighting sustainability through visuals and layout. The interface is clean and easy to navigate, letting users explore products and learn about the brand without feeling overwhelmed. Working on this project helped me practice using color, typography, and layout to communicate personality and values, while keeping the experience approachable and engaging.',
  technologies: ['Figma', 'UX Research', 'Prototyping'],
  files: [
    {
      name: 'Interactive_Prototype.link',
      type: 'document',
      content: 'Website Wireframe Prototype',
      url: 'https://www.figma.com/proto/7mV1FImpTTJYs4veyPXVB9/Arshadha-24020989-EcoLine-Wireframe?page-id=18%3A15&node-id=18-16&p=f&viewport=64%2C312%2C0.06&t=SMyI7NS9LmUTGYFg-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18%3A16&show-proto-sidebar=1'
    },
    {
      name: 'Live_Wireframe.link',
      type: 'document',
      content: ' View Live Wireframe',
      url: 'https://www.figma.com/design/7mV1FImpTTJYs4veyPXVB9/Arshadha-24020989-EcoLine-Wireframe?node-id=18-15&t=NrXxfvLS5eZGJVZ7-1'
    },
    // Local wireframe images
    ...Array.from({ length: 6 }, (_, i) => ({
      name: `WireframeImg${i + 1}.png`,
      type: 'image',
      content: `Presentation Slide ${i + 1}`,
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectEcommercewebsite/WireframeImg${i + 1}.png`
    }))
  ],
  image: `${process.env.PUBLIC_URL}/Projectfile/ProjectEcommercewebsite/WireframeImg1.png`
};
