export const StudySpot = {
  id: 7,
  title: 'Study Spot Singapore',
  category: 'Development',
  year: '2025',
  description: 'I worked on a collaborative project to create a study spot finder website for students in Singapore. The platform allows students to discover libraries and other study locations, filter them by amenities like Wi-Fi or cafes, and reserve a spot so it\'s guaranteed when they arrive. The website also includes an admin side where locations can be added, edited, or removed.\n\nI mainly focused on the frontend, handling styling and implementing features such as the search bar, filters, and booking functionality. The project is a full-stack web app, with the backend built using SQL and deployed on Render, and the frontend deployed through Vercel. The locations page displays available study spots, and users can book or cancel slots, while admins have full control over managing locations.\n\nThis project gave me experience working in a team on a full-stack application, designing functional user interfaces, and implementing interactive features while considering real-world usability for students.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  files: [   
     {
      name: 'GitHub Repository',
      type: 'document',
      content: 'View source code on GitHub',
      url: 'https://github.com/trevorr123/C219-studyspotsg-CA2'
    },
    {
      name: 'Live Demo',
      type: 'document',
      content: 'Visit live website',
      url: 'https://studyspotsg-ca2.vercel.app'
    },
    ...Array.from({ length: 12 }, (_, i) => ({
      name: `Screenshot${i + 1}.png`,
      type: 'image',
      content: `Study Spot website screenshot ${i + 1}`,
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectStudySpotSg/Screenshot${i + 1}.png`
    })),

  ],
  image: `${process.env.PUBLIC_URL}/Projectfile/ProjectStudySpotSg/Screenshot1.png`
};
