export const BrandIdentity = {
  id: 1,
  title: 'Brand Identity Design',
  category: 'Design',
  year: '2025',
  description: 'For this project, I created a personal brand identity package, including a logo, color palette, typography, and custom UI assets, to showcase my digital design skills.',
  
  details: (
    <>
      <h3>The Vision</h3>
      <p>
        When I started creating my personal brand identity, I wanted something that felt 
        bold and showed my love for digital aesthetics. 
        I chose bright neon colors, cyan, and magenta against dark backgrounds, 
        simply because I enjoy them. There's something energizing about neon that feels modern, digital, 
        and bold.
      </p>

      <h3>Design Process</h3>
      
      <h4>Color Exploration</h4>
      <p>
        The color palette was the foundation of everything. I tried different neon 
        combinations, testing them on dark backgrounds to see which ones had the right impact. 
        The final palette balances high energy with readability, bright enough to catch 
        attention but not so overwhelming that it becomes uncomfortable to look at.
      </p>

 

      <h4>Custom Icon Design</h4>
      <p>
        I designed custom icons for contact methods and navigation to make sure every element 
        felt cohesive with the overall brand. Each icon follows the same visual style, clean lines, 
        neon accents, and consistent spacing.
      </p>

      <h3>Tools & Techniques</h3>
      <p>
        This project was my first time really using AI-assisted design tools in 
        Photoshop and Illustrator. I used AI features to add variations to my assets, 
        trying effects I might not have tried manually. But I was careful to 
        keep everything original, AI was just a tool to enhance my vision, not replace the creative 
        process.
      </p>

      <p>
        I learned how to work efficiently between Illustrator for vector assets and Photoshop 
        for textures and final compositions. The workflow taught me how important it is to organize 
        layers, keep consistent export settings, and create reusable components.
      </p>

      <h3>Building the Brand System</h3>
      <p>
        Creating a brand identity isn't just about making things look good, it's about 
        consistency and cohesion. Every element needed to work together: 
        the logo with the typography, the colors with the icons, the overall aesthetic with 
        the platform (Wix) where it would live.
      </p>

      <p>
        I created a complete brand package that included:
      </p>
      <ul>
        <li>Primary and secondary logo variations</li>
        <li>Complete color palette with hex codes</li>
        <li>Custom Icons for common UI elements</li>
        <li>Example applications (Instagram posts, website mockups)</li>
      </ul>

      <h3>Challenges & Learning</h3>
      <p>
        The biggest challenge was balancing boldness with usability. Neon colors are 
        exciting, but they can be overwhelming or hard to read if not handled carefully. I had 
        to test contrast ratios, try different background shades, and think about how the 
        brand would look on different devices and contexts.
      </p>

      <p>
        I also learned how important thoughtful color choices are. Some neon combinations 
        made text impossible to read. Through testing and refinement, I found 
        the right balance.
      </p>

      <h3>Reflections</h3>
      <p>
        While the project isn't perfect, it shows growth in my design skills. 
        I tried new tools, and learned how to make design 
        decisions that balance aesthetics with functionality. The process taught me that 
        good design is intentional, every color, font, and icon choice should 
        have a reason behind it.
      </p>
    </>
  ),
  
  technologies: ['Illustrator', 'Photoshop', 'Wix'],
  files: [
    {
      name: 'brand_design.png',
      type: 'image',
      content: 'Design of Instagram Post using Brand Asset Logo',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectBrandDesign/branddesign.png`
    },
    {
      name: 'brand_websitedesign.pdf',
      type: 'document',
      content: 'Conceptual Website Design Mockup Pdf',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectBrandDesign/brandwebsitedesign.pdf`
    },
    {
      name: 'Brand_Presentation.pptx',
      type: 'document',
      content: 'Presentation of Brand Identity',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectBrandDesign/branddesignpresentation.pptx`
    },
    ...Array.from({ length: 17 }, (_, i) => ({
      name: `Slide${i + 1}.png`,
      type: 'image',
      content: `Presentation Slide ${i + 1}`,
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectBrandDesign/Slide${i + 1}.png`
    }))
  ],
  image: `${process.env.PUBLIC_URL}/Projectfile/ProjectBrandDesign/branddesign.png`
};
