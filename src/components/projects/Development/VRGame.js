export const VRGame = {
  id: 4,
  title: 'Escape Room VR Experience',
  category: 'Development',
  year: '2025',
  description:
    'A witchy, one-room VR escape experience focused on tactile, puzzle-driven interactions. You explore a dim, arcane dungeon filled with potions, a bubbling cauldron, a magic book, etched runes, elemental crystals (air, water, earth, fire), and a wand that channels spells. By deciphering clues, brewing precise mixtures, and aligning elemental forces, you unlock a treasure chest, recover the key, and open the final door. Designed for comfort-first VR with intuitive hand interactions, spatial audio, and clear puzzle feedback.',
  technologies: ['Unity', 'C#', 'XR Interaction Toolkit'],
  files: [
    {
      name: 'screenrecordingofvescaperoom.mp4',
      type: 'video',
      content: 'First-person gameplay footage',
      url: '/Projectfile/ProjectVRGame/screenrecordingofvrescaperoom.mp4'
    },
    {
      name: 'Game Design Document draft 2.docx',
      type: 'document',
      content: 'Mechanics and world building',
      url: '/Projectfile/ProjectVRGame/GameDesignDocument.docx'
    },
    {
      name: 'Flowchart.png',
      type: 'image',
      content: 'Game logic flowchart',
      url: '/Projectfile/ProjectVRGame/Flowchart.jpg'
    },
    // Add screenshots
    ...Array.from({ length: 9 }, (_, i) => ({
      name: `Screenshot_${i + 1}.png`,
      type: 'image',
      content: `In-game screenshot ${i + 1}`,
      url: `/Projectfile/ProjectVRGame/Screenshot_${i + 1}.png`
    }))
  ],
  image: '/Projectfile/ProjectVRGame/Screenshot_1.png' 
};