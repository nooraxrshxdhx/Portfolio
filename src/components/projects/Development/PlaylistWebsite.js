export const PlaylistWebsite = {
  id: 8,
  title: 'Playlist Website',
  category: 'Development',
  year: '2025',
  description: 'This was my first time creating a website, and I learned Express.js and EJS through building this project. I wanted to create a playlist app where users could store all their favorite songs and organize them by albums or singles.',
  
  details: (
    <>
      <h3>My First Web Development Project</h3>
      <p>
        I had never built a complete website before this. I knew some basic HTML 
        and CSS, but Express.js, server-side rendering, and databases were totally new to me. 
        I decided to build something I actually wanted to use, 
        a playlist manager for my favorite songs.
      </p>

      <h3>Learning Backend Development</h3>
      
      <h4>Discovering Express.js</h4>
      <p>
        Express.js was my first taste of backend development. At first, concepts like 
        routing felt confusing and abstract. 
        But as I started building endpoints for creating, reading, updating, and deleting songs, 
        it became clearer.
      </p>

      <h4>Server-Side Rendering with EJS</h4>
      <p>
        I chose EJS (Embedded JavaScript) for rendering pages. 
        The syntax looked like HTML, but I could pass dynamic data from my server. 
      </p>

      <h3>Core Features</h3>
      <p>
        I wanted this playlist app to be functional, not just a school project. 
        Here are the features I built:
      </p>

      <h4>Song and Album Management</h4>
      <p>
        Users can add songs with details like title, artist, duration, and album. 
        Songs can be part of albums or marked as singles. This meant implementing 
        CRUD operations (Create, Read, Update, Delete) for both songs and albums.
      </p>

      <h4>Playlist Randomization</h4>
      <p>
        I added a shuffle feature that randomizes the playlist order. This sounded simple at first, 
        but I had to figure out how to keep the shuffled order.
      </p>

      <h4>Like System</h4>
      <p>
        Users can mark songs as favorites. This required adding a boolean field to the database 
        and creating a toggle to update the like status. Building this taught me about 
        how to handle boolean values and update records.   
      </p>

      <h4>Edit and Delete Functionality</h4>
      <p>
        Both songs and albums can be edited or deleted. The tricky part was handling 
        what happens when an album is deleted, what about its songs? I decided 
        to convert album songs to singles instead of deleting them completely.
      </p>

      <h3>Technical Challenges</h3>
      
      <h4>Form Handling</h4>
      <p>
        Creating forms that actually send data to the server was harder than I expected. 
        I had to learn about POST requests, body parsing, and form validation. 
        At first my forms would submit but nothing would save, but I figured it out.
      </p>

      <h4>User Interface Design</h4>
      <p>
        For a first project, I wanted the UI to be functional and user-friendly, 
        even if it wasn't fancy. I focused on clear navigation, readable text, and buttons 
        that made sense. The design is simple, but it gets the job done.
      </p>

      <h3>What I Learned</h3>
      
      <p>
        This project taught me a lot about web development fundamentals. I learned how to:
      </p>
      <ul>
        <li>Set up a basic Express.js server</li>
        <li>Handle HTTP requests and responses</li>
        <li>Create and manage routes</li>
        <li>Build user interfaces with HTML and CSS</li>
        <li>Handle form submissions and data validation</li>
        <li>Debug issues and solve problems</li>
      </ul>

      <h3>Reflections</h3>
      <p>
        Looking back, this project wasn't just about building a playlist app, it was about 
        learning to think like a web developer. I went from not knowing what Express.js 
        was to building a functional web application with multiple features, database operations, 
        and a user interface.
      </p>

      <p>
        The code isn't perfect. There are definitely things I would do differently now. But 
        that's what makes a first project special, it's a foundation for growth. 
        Every mistake taught me something, and every feature I got working boosted 
        my confidence.
      </p>

      <p>
        This playlist website gave me the fundamentals I needed to tackle more complex projects. 
        It was a great starting point for my journey in web development.
      </p>
    </>
  ),
  
  technologies: ['Express.js', 'EJS', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
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