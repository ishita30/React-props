import React from 'react'
import Entry from './Entry.jsx'

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary"></dl>
      <Entry
        emoji="💪"
        name="Tense Biceps"
        meaning="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />
      <Entry
        emoji="🙏"
        name="Person With Folded Hands"
        meaning="Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
      />
      <Entry
        emoji="🤣"
        name="Rolling On The Floor, Laughing"
        meaning="This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
      />
    </div>
  )
}

export default App
