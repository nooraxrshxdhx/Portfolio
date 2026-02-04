export const StudySpot = {
  id: 7,
  title: 'Study Spot Singapore',
  category: 'Development',
  year: '2025',
  description: 'I worked on a collaborative project to create a study spot finder website for students in Singapore. The platform allows students to discover libraries and other study locations, filter them by amenities, and reserve spots.',
  
  details: (
    <>
      <h3>The Problem We Solved</h3>
      <p>
        As students in Singapore, my team and I noticed a common frustration: finding a good 
        place to study was harder than it should be. Libraries fill up quickly, cafes can be 
        too noisy, and you never know if a spot has Wi-Fi or power outlets until you arrive. 
        We wanted to create a centralized platform that solved these pain points.
      </p>

      <h3>Project Scope</h3>
      <p>
        Study Spot Singapore needed to serve two types of users: students looking for study 
        locations and administrators managing the location database. This meant 
        building both a public-facing interface and an admin panel, with appropriate access 
        controls and functionality for each.
      </p>

      <h3>My Role: Frontend Development</h3>
      <p>
        I primarily focused on the frontend, handling styling, responsive design, 
        and implementing interactive features. While other team members worked on the backend 
        (SQL database, API endpoints), I ensured the user interface was functional, intuitive, 
        and visually appealing.
      </p>

      <h4>Search and Filter Implementation</h4>
      <p>
        The search bar needed to be fast and flexible. Users might search by location name, 
        area, or even partial matches. I implemented real-time search filtering 
        that updates results as users type, making it easy to find relevant locations quickly.
      </p>

      <p>
        The filter system was equally important. Students need to find spots with specific 
        amenities—Wi-Fi, power outlets, quiet spaces, nearby cafes. I created a multi-select 
        filter system that lets users combine criteria and see matching locations instantly.
      </p>

      <h4>Booking Functionality</h4>
      <p>
        One of the most complex features was the booking system. Students can 
        reserve a spot at a location for a specific time slot, ensuring it's available when they 
        arrive. This required:
      </p>
      <ul>
        <li>Displaying available time slots for each location</li>
        <li>Preventing double-bookings</li>
        <li>Allowing users to view and cancel their reservations</li>
        <li>Visual feedback for booking status (confirmed, canceled)</li>
      </ul>

      <h3>Admin Panel Design</h3>
      <p>
        The admin side needed different functionality for adding new locations, editing existing 
        ones, and removing outdated spots. My team designed an admin dashboard that's 
        clean and efficient, with clear forms and confirmation dialogs to prevent accidental 
        deletions.
      </p>

      <h4>Location Management</h4>
      <p>
        Admins can:
      </p>
      <ul>
        <li>Add new study locations with details (name, address, amenities)</li>
        <li>Upload photos of the location</li>
        <li>Edit information as it changes</li>
        <li>Permanently remove outdated entries</li>
      </ul>

      <h3>Technical Implementation</h3>
      
      <h4>Frontend Stack</h4>
      <p>
        I used HTML, CSS, and JavaScript to build the interface. While this 
        seems basic, creating a responsive and accessible interface requires
        attention to detail.
      </p>

      <h4>Integration with Backend</h4>
      <p>
        The backend team member built the database using MySQL and deployed it on Render, 
        and then deployed the frontend through Vercel. There was clear documentation of what data each endpoint expected and returned.
      </p>

      <h3>Collaboration Lessons</h3>
      <p>
        This was one of my first experiences working on a team project with separated responsibilities. 
        I learned:
      </p>
      <ul>
        <li>The importance of clear communication about what each feature needs</li>
        <li>How to use Git for version control without overwriting teammates' work</li>
        <li>The value of API documentation when frontend and backend are separate</li>
      </ul>

      <h3>What I Learned</h3>
      <p>
        This project taught me about full-stack collaboration. Even though I 
        focused on frontend, I gained a much better understanding of how the entire system works together from 
        database queries to API endpoints to user interface rendering.
      </p>

      <p>
        I also learned to design functional user interfaces that prioritize usability 
        over decoration. The search needs to be fast. The filters need to be clear. The booking 
        flow needs to be intuitive. Every design decision served a purpose.
      </p>
    </>
  ),
  
  technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Responsive Design', 'Vercel', 'Render'],
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