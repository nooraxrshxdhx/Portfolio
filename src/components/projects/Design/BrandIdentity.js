export const BrandIdentity = {
  id: 1,
  title: 'Brand Identity Design',
  category: 'Design',
  year: '2025',
  description:
    'Complete brand identity package including logo design, color palette, for a personal brand.',
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
