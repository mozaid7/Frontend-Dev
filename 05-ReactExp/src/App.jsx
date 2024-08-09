import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <Header title="Zaid" />
      <Header title="Zaid2" />
    </div>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App
