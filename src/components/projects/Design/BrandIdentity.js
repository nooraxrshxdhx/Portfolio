export const BrandIdentity = {
  id: 1,
  title: 'Brand Identity Design',
  category: 'Design',
  year: '2025',
  description:
    'For this project, I created a personal brand identity package, including a logo, color palette, typography, and custom UI assets, to showcase my digital design skills. I chose bright neon colors simply because I enjoy them, experimenting with cyan, magenta, and lime green on dark backgrounds. The typography mixes a glowing-style font with a more readable script font, and I designed custom icons for contact methods, skills, and navigation. I explored AI-assisted tools in Photoshop and Illustrator to add texture and polish to my assets, while keeping everything original. The project was a chance to practice combining branding, color, and interface design, and I learned the importance of consistency and thoughtful color choices. While the project isn’t perfect, it helped me improve my workflow, experiment with new tools, and understand how to make my designs feel cohesive.',
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
    // Add slides
    ...Array.from({ length: 17 }, (_, i) => ({
      name: `Slide${i + 1}.png`,
      type: 'image',
      content: `Presentation Slide ${i + 1}`,
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectBrandDesign/Slide${i + 1}.png`
    }))
  ],
  image: `${process.env.PUBLIC_URL}/Projectfile/ProjectBrandDesign/branddesign.png`
};
