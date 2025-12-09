
export const EcommerceWireframe= {
  id: 3,
  title: 'EcoLine, An E-commerce Website Wireframe Design',
  category: 'Design',
  year: '2025',
  description:
    'High-Fidelity wireframe and prototype for a sustainable fashion e-commerce website. The design emphasizes on showing a Green theme, brand story, and user-friendly shopping experience with intuitive navigation and clear call-to-actions.',
  technologies: ['Figma', 'UX Research', 'Prototyping'],
  files: [
    {
      name: 'Interactive_Prototype.link',
      type: 'document',
      content: 'Website Wireframe Prototype',
      url: ' https://www.figma.com/proto/7mV1FImpTTJYs4veyPXVB9/Arshadha-24020989-EcoLine-Wireframe?page-id=18%3A15&node-id=18-16&p=f&viewport=64%2C312%2C0.06&t=SMyI7NS9LmUTGYFg-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18%3A16&show-proto-sidebar=1'
    },
    {
      name: 'Live_Wireframe.link',
      type: 'document',
      content: ' View Live Wireframe',
      url: 'https://www.figma.com/design/7mV1FImpTTJYs4veyPXVB9/Arshadha-24020989-EcoLine-Wireframe?node-id=18-15&t=NrXxfvLS5eZGJVZ7-1'
    },
    // Add wireframe layouts
    ...Array.from({ length: 6 }, (_, i) => ({
      name: `WireframeImg${i + 1}.png`,
      type: 'image',
      content: `Presentation Slide ${i + 1}`,
      url: `/Projectfile/ProjectEcommercewebsite/WireframeImg${i + 1}.png`
    }))
  ],
  image: '/Projectfile/ProjectEcommercewebsite/WireframeImg1.png' 
};