import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
     <Routes>
       <Route path="/Dashboard" element={<Dashboard />} />
       <Route path="/Landing" element={<Landing />} />
     </Routes>
    </BrowserRouter>
    
  )
}

export default App
