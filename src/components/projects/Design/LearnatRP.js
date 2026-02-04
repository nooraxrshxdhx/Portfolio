export const LearnatRP = {
  id: 6,
  title: 'Learn@RP course app Wireframe Design',
  category: 'Design',
  year: '2026',
  description: 'Learn@RP is a course portal concept I designed in Figma, aimed at helping students access and learn from video-based courses.',
  
  details: (
    <>
      <h3>Project Overview</h3>
      <p>
        Learn@RP came from watching how students actually use learning platforms. 
        Too many educational apps feel cluttered, confusing, or just outdated. I wanted 
        to create a course portal that felt modern, intuitive, and genuinely helpful for students 
        trying to manage their learning.
      </p>

      <h3>Building the UI Kit</h3>
      <p>
        Before designing any screens, I created a complete UI kit, a design system 
        that would keep everything consistent across the entire app. This included:
      </p>

      <h4>Visual Foundation</h4>
      <ul>
        <li>Colors that are easy to read and don't strain your eyes during long study sessions</li>
        <li>Typography with clear hierarchy for course titles, descriptions, and body text</li>
        <li>Spacing and grid that gives breathing room without wasting screen space</li>
      </ul>

      <h4>Interactive Components</h4>
      <p>
        I designed every component to be flexible and reusable. Form elements, buttons, 
        navigation bars, tabs, cards, toggles, and spinners all follow the same 
        visual style. This wasn't just about looking good, it meant that once I started building 
        screens, I could work quickly and keep everything consistent.
      </p>

      <h3>Designing the User Experience</h3>
      
      <h4>Course Library</h4>
      <p>
        The library page needed to handle hundreds of courses without overwhelming 
        users. I added filter tabs that let students narrow down courses 
        by category. The filtering feels instant and responsive, 
        helping users find exactly what they need quickly.
      </p>

      <h4>Search Functionality</h4>
      <p>
        The search page includes a keyboard overlay for a mobile-first experience. 
        I prototyped this to feel natural and responsive. Small details like this make the difference between an interface that feels sluggish 
        and one that feels polished.
      </p>

      <h4>Navigation Patterns</h4>
      <p>
        I designed both vertical and horizontal scrolling depending on the content type. 
        Course lists scroll vertically for easy browsing, while related courses or module sections 
        scroll horizontally. This creates visual variety while keeping navigation intuitive.
      </p>

      <h3>Interactive Prototyping</h3>
      <p>
        The prototype is fully interactive, not just static screens 
        clicked together. Toggle switches actually toggle. The spinner animates. Filter tabs 
        highlight and update content. The keyboard overlay slides up naturally.
      </p>

      <p>
        Building this level of interactivity taught me to think like a developer, not just 
        designing how something looks, but understanding how it should behave. Every 
        tap, swipe, and transition needed to feel natural and responsive.
      </p>

      <h3>Component Design Philosophy</h3>
      <p>
        Each component was designed with multiple states: default, hover, active, 
        disabled, error, and success. This thorough approach meant that when I assembled screens, I 
        already had all the pieces I needed to show realistic user interactions.
      </p>

      <h4>The Card Component</h4>
      <p>
        Course cards were especially important. They needed to display:
      </p>
      <ul>
        <li>Course thumbnail</li>
        <li>Title</li>
        <li>Progress indicator</li>
        <li>Duration and difficulty</li>

      </ul>
      
      <p>
        All in a compact, scannable format that works in both grid and list views.
      </p>

      <h3>Design System Benefits</h3>
      <p>
        Creating the UI kit helped me streamline the design process
        and maintain consistency across all screens:
      </p>
      <ul>
        <li>Faster design iterations (no reinventing buttons for every screen)</li>
        <li>Automatic consistency (all screens feel like part of the same app)</li>
        <li>Simpler maintenance (updating one component updates it everywhere)</li>
      </ul>

      <h3>Balancing Functionality and Aesthetics</h3>
      <p>
        The hardest part was keeping the interface clean and approachable 
        while packing in all the functionality students need. Every feature I added risked making 
        the UI more cluttered, so I had to be ruthless about what really mattered.
      </p>

      <h3>What I Learned</h3>
      <p>
        This project taught me how to create a complete design system from scratch. 
        I learned about component-based design, consistency, and scalability. 
        
      </p>

      <p>
        I also got experience combining UI components with interactive prototyping. 
        Static mockups only tell part of the story. Real understanding comes from seeing how 
        components behave, how screens transition, and how the entire system works together.
      </p>

      <p>
        Most importantly, I learned to think through user flows for a learning platform. 
        How do students discover courses? How do they track progress? How do they search efficiently? 
        These questions drove every design decision I made.
      </p>

    </>
  ),
  
  technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
  files: [
    {
      name: 'Interactive_Prototype.link',
      type: 'document',
      content: 'Website Wireframe Prototype', 
      url: 'https://www.figma.com/proto/DfkOx04o2XJ3fqqiD4eeH2/C218-CA2-Arshadha24020989-Learn-Rp-App?page-id=23%3A8&node-id=51-282&p=f&viewport=462%2C164%2C0.14&t=Hu4EOAXJ5aA69OXG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=51%3A282'
    },
    {
      name: 'Live_Wireframe.link',     
      type: 'document',
      content: ' View Live Wireframe',
      url:'https://www.figma.com/design/DfkOx04o2XJ3fqqiD4eeH2/C218-CA2-Arshadha24020989-Learn-Rp-App?node-id=23-8&t=vrRm74FjABJXFe4k-1'
    },
    {
      name: 'Recoriding_of_Prototype.mp4',
      type: 'video',
      content: 'Screen Recording of the Interactive Prototype',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/Prototyperecording.mp4`   
    },
    {
      name: 'Color_Palette.png',
      type: 'image',
      content: 'Color Palette Used in Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/colorpalette.png`
    },
    {
      name: 'Typography.png',
      type: 'image',
      content: 'Typography Formats Used in Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/typography.png`
    },
    { 
      name: 'Button_Styles.png',
      type: 'image',
      content: 'Button Styles Used in Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/buttons.png`
    },
    {
      name: 'Navigation_Tabs.png',
      type: 'image',
      content: 'Navigation Tabs Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/navigationtabs.png`
    },
    {
      name: 'Navbar.png',
      type: 'image',
      content: 'Navbar Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/navbar.png`
    },
    {
      name: 'Form_input_fields.png',
      type: 'image',
      content: 'Form Input Fields Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/forms.png`
    },
    {
      name: 'icons.png',
      type: 'image',
      content: 'Icons Used in Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/icons.png`
    },
    {
      name: 'Card_Designs.png',
      type: 'image',
      content: 'Card Designs Used in Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/cards.png`
    },
    {
      name: 'Interactive_components.png',
      type: 'image',
      content: 'Interactive Components Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/interactivecomponents.png`
    },
    {
      name: 'Homepage_Design.png',
      type: 'image',
      content: 'Homepage Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/homepage.png`
    },
    {
      name: 'Library_Page_Design.png',
      type: 'image',
      content: 'Library Page Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/librarypage.png`
    },
    {
      name: 'filter_pages_Design.png',    
      type: 'image',
      content: 'Filter Pages Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/filterpages.png`
    },
    {
      name: 'Course_Details_Page_Design1.png',
      type: 'image',
      content: 'Course Content Page Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/coursedetailpage1.png`
    },
    {
      name: 'Course_Content_Page_Design2.png',
      type: 'image',
      content: 'Course Content Page Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/coursedetailpage2.png`
    },
    {
      name: 'Feedback_overlay.png',
      type: 'image',
      content: 'Feedback Overlay Design',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/feedbackoverlay.png`
    },
    {
      name: 'Search_page_Design.png',
      type: 'image',
      content: 'Search Page Design',    
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/searchpage.png`
    }
  ],
  image: `${process.env.PUBLIC_URL}/Projectfile/ProjectLearn@RP/homepage.png`
};
