export const PlaylistWebsite = {
  id: 8,
  title: 'Playlist Website',
  category: 'Development',
  year: '2025',
  description: 'This was my first time creating a website, and I learned Express.js and EJS through building this project. I wanted to create a playlist app where users could store all their favorite songs and organize them by albums or singles. The app includes features like randomizing the playlist, liking songs, and the ability to edit or delete both songs and albums.\n\nBuilding this project taught me the fundamentals of backend development with Express.js and how to use EJS for server-side rendering. I implemented CRUD operations for managing songs and albums, created a user-friendly interface for playlist management, and added interactive features like the randomize function and like system. This project was an important learning experience that helped me understand full-stack web development and gave me confidence in building dynamic web applications.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
  files: [    
    {
      name: 'GitHub Repository',
      type: 'document',
      content: 'View source code on GitHub',
      url: 'https://github.com/nooraxrshxdhx/Playlistwebsite'
    },
    ...Array.from({ length: 7 }, (_, i) => ({
      name: `Screenshot${i + 1}.png`,
      type: 'image',
      content: `Playlist website screenshot ${i + 1}`,
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectPlaylistwebsite/Screenshot${i + 1}.png`
    })),

  ],
  image: `${process.env.PUBLIC_URL}/Projectfile/ProjectPlaylistwebsite/Screenshot1.png`
};
