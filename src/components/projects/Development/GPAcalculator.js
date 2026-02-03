export const GPAcalculator = {
  id: 5,
  title: 'GPA Calculator MobileApp',
  category: 'Development',
  year: '2025',
  description: 'something',
    technologies: ['React Native', 'JavaScript', 'CSS'],
    files: [
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