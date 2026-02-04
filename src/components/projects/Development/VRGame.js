export const VRGame = {
  id: 4,
  title: 'Escape Room VR Experience',
  category: 'Development',
  year: '2025',
  description: 'A witchy, one-room VR escape experience focused on puzzle-driven interactions. You explore a dim, arcane dungeon filled with magical elements and solve interconnected puzzles to escape.',
  
  details: (
    <>
      <h3>Creating an Immersive VR Experience</h3>
      <p>
        Virtual reality offers something regular games can't: physical presence 
        and interaction. For this escape room experience, I wanted to let players 
        grab objects, pour potions, and manipulate magical elements with their hands.
      </p>

      <h3>The World</h3>
      <p>
        The setting is a dim, arcane dungeon with a witchy vibe. I chose a single-room 
        design to focus on the puzzles. Every object in the room has a purpose.
        The atmosphere is mysterious but not scary, inviting 
        exploration rather than tension.
      </p>

      <h4>The Potion Brewing System</h4>
      <p>
        The main puzzle involves brewing a specific potion. Players must:
      </p>
      <ol>
        <li>Figure out clues from the magic book about ingredients</li>
        <li>Pick the right potion bottles from scattered options</li>
        <li>Pour into the cauldron</li>
        <li>Add ingredients in the right order</li>
        <li>Listen to the sound changes to confirm success</li>
      </ol>

      <h4>Elemental Alignment</h4>
      <p>
        The elemental crystals must be arranged in a specific pattern around the room. Clues are 
        hidden in the rune etchings, but decoding them requires observation and pattern recognition. 
        When crystals are placed correctly, they emit harmonic tones and light up to show you've solved part of the puzzle.
      </p>

      <h4>The Wand Mechanic</h4>
      <p>
        The wand activates the runes, but it only works when you've completed the preparation steps. 
        This creates a sense of progression. Early interactions might fail, 
        teaching you that magic needs specific conditions. Later, when everything is ready, 
        successfully activating the runes feels earned.
      </p>

      <h3>Technical Implementation</h3>
      
      <h4>Unity and XR Interaction Toolkit</h4>
      <p>
        I built the experience in Unity using the XR Interaction Toolkit, which 
        handles the interaction logic for VR input. 
      </p>

      <h4>C# Scripting for Puzzle Logic</h4>
      <p>
        Each puzzle needed custom C# scripts to:
      </p>
      <ul>
        <li>Track which ingredients have been added to the cauldron</li>
        <li>Check if elemental crystals are in correct positions</li>
        <li>Verify if the wand is being used under proper conditions</li>
        <li>Trigger events when puzzles are solved (unlock chest, reveal key, open door)</li>
      </ul>

      <h3>Design for Comfort</h3>
      <p>
        VR can cause motion sickness if not handled carefully. I designed with 
        comfort-first principles:
      </p>
      <ul>
        <li>Teleport movement instead of smooth movement</li>
        <li>Standing experience with minimal need to move around</li>
        <li>Clear feedback for all interactions (audio cues)</li>
      </ul>

      <h3>Audio Design</h3>
      <p>
        Sound is crucial in VR. I implemented spatial audio so that sounds come 
        from their actual locations. The cauldron makes sounds when you mix potions. 
        The elemental crystals hum when you place them.
        The puzzles give feedback through sound. These audio cues 
        help orient players and make the world feel alive.
      </p>

      <h3>Development Challenges</h3>
      
      <h4>Debugging in VR</h4>
      <p>
        I spent hours debugging issues like objects not responding or interactions failing. 
        These frustrating moments taught me to read error messages carefully, check my code structure, 
        and use console logs strategically.
      </p>

      <h4>Balancing Difficulty</h4>
      <p>
        Puzzles that seem obvious to the creator can be confusing to players. I playtested several times
        and watched where I got stuck. Sometimes I made small changes. Other times I 
        realized a part of the puzzle wasn't clear enough and needed redesign.
      </p>

      <h3>What I Learned</h3>
      <p>
        This project taught me about interaction design in three-dimensional space. 
        VR isn't just "3D games with a headset" it requires thinking about 
        how users discover, learn, and interact with your world.
      </p>
    </>
  ),
  
  technologies: ['Unity', 'C#', 'XR Interaction Toolkit', 'Spatial Audio', '3D Modeling'],
  files: [
    {
      name: 'screenrecordingofvescaperoom.mp4',
      type: 'video',
      content: 'First-person gameplay footage',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectVRGame/screenrecordingofvrescaperoom.mp4`
    },
    {
      name: 'Game Design Document draft 2.docx',
      type: 'document',
      content: 'Mechanics and world building',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectVRGame/GameDesignDocument.docx`
    },
    {
      name: 'Flowchart.png',
      type: 'image',
      content: 'Game logic flowchart',
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectVRGame/Flowchart.jpg`
    },
    ...Array.from({ length: 9 }, (_, i) => ({
      name: `Screenshot_${i + 1}.png`,
      type: 'image',
      content: `In-game screenshot ${i + 1}`,
      url: `${process.env.PUBLIC_URL}/Projectfile/ProjectVRGame/Screenshot_${i + 1}.png`
    }))
  ],
  image: `${process.env.PUBLIC_URL}/Projectfile/ProjectVRGame/Screenshot_1.png`
};