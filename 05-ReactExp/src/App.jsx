import { useState } from 'react'
import React, { Fragment } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("My name is Zaidy");

  function updateTitle() {
    setTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
      <Header title="Zaid2" />
      <Header title="Zaid2" />
      <Header title="Zaid2" />
    </div>
  )
}

const Header = React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})

export default App
