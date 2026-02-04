export const GPAcalculator = {
  id: 5,
  title: 'ArchiveGPA',
  category: 'Development',
  year: '2025',
  description: 'ArchiveGPA is a mobile app I created to help students keep track of their grades and understand their academic progress. As a student myself, I often found it hard to stay on top of my modules, calculate my GPA, and plan ahead. This app started as a solution to that problem.\n\nWith ArchiveGPA, users can store and organize module grades by semester, see their cumulative GPA using the Republic Polytechnic 4.0 grading scale, and plan ahead with predictive tools. They can add, edit, or delete individual modules or entire semester grades, making it easier to track progress over time. The app also includes a target GPA planner, which calculates the average grades needed in future modules to reach a goal, and all data is stored securely on the device.\n\nOne of my main goals was to make the app easy to use and visually approachable. I designed a clean, pastel-themed interface to make navigating and understanding academic data simple and enjoyable. Building this app helped me practice combining functionality, data management, and UI design in a way that solves real problems for students.',
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