import React from 'react'
import Entry from './Entry.jsx'
import emojipedia from '../emojipedia'

//console.log(emojipedia)

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary"></dl>
      {emojipedia.map(createEntry)}
    </div>
  )
}

export default App
