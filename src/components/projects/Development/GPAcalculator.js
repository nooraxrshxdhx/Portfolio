export const GPAcalculator = {
  id: 5,
  title: 'ArchiveGPA',
  category: 'Development',
  year: '2025',
  // description: 'ArchiveGPA is a mobile app I created to help students keep track of their grades and understand their academic progress. As a student myself, I often found it hard to stay on top of my modules, calculate my GPA, and plan ahead. This app started as a solution to that problem.\n\nWith ArchiveGPA, users can store and organize module grades by semester, see their cumulative GPA using the Republic Polytechnic 4.0 grading scale, and plan ahead with predictive tools. They can add, edit, or delete individual modules or entire semester grades, making it easier to track progress over time. The app also includes a target GPA planner, which calculates the average grades needed in future modules to reach a goal, and all data is stored securely on the device.\n\nOne of my main goals was to make the app easy to use and visually approachable. I designed a clean, pastel-themed interface to make navigating and understanding academic data simple and enjoyable. Building this app helped me practice combining functionality, data management, and UI design in a way that solves real problems for students.',
  details: (
    <>
      <h3>The Problem</h3>
      <p>
        As a student at Republic Polytechnic, I noticed that keeping track of my grades 
        was way too complicated. Students had to calculate their GPAs by hand, couldn't easily 
        see their progress over time, and had no way to plan for future semesters.
      </p>

      <h3>My Solution</h3>
      <p>
        ArchiveGPA solves these problems with a mobile-first approach that combines 
        data storage, intuitive UI design, and smart calculation features. The app is built entirely 
        in React Native, giving it a smooth, native feel on both iOS and Android.
      </p>

      <h4>Key Technical Achievements</h4>
      <p>
        Building this app taught me a lot about state management in React Native. 
        I used AsyncStorage to save user data locally, making sure grades and 
        calculations stay available even after closing the app.
      </p>

      <p>
        The GPA calculation engine was the hardest part. I had to handle Republic Polytechnic's 
        unique 4.0 grading scale, deal with edge cases like incomplete semesters, and create a predictive 
        algorithm that could calculate what grades I'd need in future modules to hit my target GPA.
      </p>

      <h3>Design Principles</h3>
      <p>
        One of my main goals was to make the app easy to use and nice to look at. 
        Academic data can feel overwhelming, so I designed a clean, pastel-themed interface that makes 
        navigating and understanding complex information simple and even enjoyable.
      </p>

      <h3>What I Learned</h3>
      <p>
        This project was my first real dive into mobile development, and it taught me:
      </p>
      <ul>
        <li>How to structure a React Native app so it can grow</li>
        <li>Best practices for saving data and managing state</li>
        <li>Why user-centered design matters in educational tools</li>
        <li>How to balance lots of features with simplicity</li>
      </ul>

      <p>
        Building ArchiveGPA helped me practice combining functionality, data management, 
        and UI design to solve real problems for students. It's a project I'm 
        genuinely proud of, and one that I still use personally every semester.
      </p>
    </>
  ),  
  technologies: ['React Native', 'JavaScript', 'CSS'],
    files: [
      {
        name: 'GitHub Repository',
        type: 'document',
        content: 'View source code on GitHub',
        url: 'https://github.com/AY2025-S2-C346/ca1-nooraxrshxdhx'
      },
      {
        name: 'GPA_Calculatorrecording.mp4',
        type: 'video',
        content: 'Screen recording of the GPA Calculator app in use',
        url: `${process.env.PUBLIC_URL}/Projectfile/ProjectGpacalculator/Apprecording.mp4`
    },
    
        ...Array.from({ length: 5 }, (_, i) => ({
          name: `GPA_Calculator_AppScreenshots_${i + 1}.png`,
          type: 'image',
          content: `Screenshot ${i + 1} of the GPA Calculator app`,
          url: `${process.env.PUBLIC_URL}/Projectfile/ProjectGpacalculator/Screenshot${i + 1}.png`
        }))
    
    ],
    image: `${process.env.PUBLIC_URL}/Projectfile/ProjectGpacalculator/Screenshot1.png`
};