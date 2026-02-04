export const EcommerceWireframe = {
  id: 3,
  title: 'EcoLine, An E-commerce Website Wireframe Design',
  category: 'Design',
  year: '2025',
  description: 'For this project, I created high-fidelity wireframes and a prototype for a sustainable fashion e-commerce website. I wanted to show that sustainable clothing can be vibrant and fun, not just plain or serious.',
  
  details: (
    <>
      <h3>The Challenge</h3>
      <p>
        Sustainable fashion has an image problem. When most people think of 
        eco-friendly clothing, they picture beige linen, minimalist designs, and serious 
        talks about environmental responsibility. There's nothing wrong with that approach, 
        but it makes people think sustainability can't be exciting, colorful, or fun.
      </p>

      <p>
        I wanted to challenge this idea. Could a sustainable fashion brand feel 
        vibrant, playful, and energetic while still sharing its environmental 
        values? That question became the foundation of EcoLine.
      </p>

      <h3>Design Philosophy</h3>
      
      <h4>Breaking the Stereotype</h4>
      <p>
        My first choice was to use more saturated colors. Instead of muddy tones, I went with bold, saturated colors that felt modern. 
        I wanted users to feel attarcted to the brand when browsing the site, not like they were being lectured about sustainability.
      </p>

      <h4>Navigation Design</h4>
      <p>
        I designed the navigation to be clean and intuitive, with clear 
        categories and filtering options.
      </p>

      <h4>Product Presentation</h4>
      <p>
        Product pages needed to showcase the clothing beautifully while also sharing its 
        sustainable features. I created a layout that puts the product front and center, with 
        sustainability information easy to find.
      </p>

      <h3>Interactive Prototype</h3>
      <p>
        The prototype shows real user flows, from landing on the homepage to browsing 
        categories, viewing product details, and making a purchase. I added interactive 
        states, hover effects, and transitions to make the experience feel realistic.
      </p>

      <p>
        Building the prototype taught me to think smooth website interactions. Every interaction 
        needed to feel smooth and intentional. Buttons needed clear hover states. Navigation 
        needed to be consistent. The shopping cart needed to update dynamically. These details 
        make the difference between a good design and a great user experience.
      </p>

      <h3>Technical Execution in Figma</h3>
      <p>
        I organized the Figma file with components and variants to keep 
        everything consistent across all screens. This meant I could update a button style once 
        and have it update across the entire design.
      </p>

      <h4>Responsive Considerations</h4>
      <p>
        While this was mainly a desktop wireframe, I designed with mobile in mind. 
        The layout grid and component spacing were chosen to work well on different screen 
        sizes. I created a few mobile versions to show how key pages would look on smaller screens.
      </p>

      <h3>What I Learned</h3>
      <p>
        This project taught me how to use color and layout to show brand values. 
        I also learned how important it is to keep the experience approachable and engaging. 
      
      </p>
    </>
  ),
  
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
    ...Array.from({ length: 6 }, (_, i) => ({
      name: `WireframeImg${i + 1}.png`,
      type: 'image',
      content: `Presentation Slide ${i + 1}`,
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectEcommercewebsite/WireframeImg${i + 1}.png`
    }))
  ],
  image: `${process.env.PUBLIC_URL}/Projectfile/ProjectEcommercewebsite/WireframeImg1.png`
};
