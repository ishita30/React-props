import React from 'react'
import Entry from './Entry.jsx'
import emojipedia from '././emojipedia'

console.log(emojipedia)

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary"></dl>
      {emojipedia.map()}
    </div>
  )
}

export default App
