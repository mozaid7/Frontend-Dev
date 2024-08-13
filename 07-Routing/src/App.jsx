import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// lazy lets you defer loading component’s code until it is rendered for the first time.
import {lazy, Suspense} from 'react';
const Landing = lazy(() => import ('./Components/Landing'))
const Dashboard = lazy(() => import ('./Components/Dashboard'))


// <Suspense> lets you display a fallback until its children have finished loading.
function App() {
  return (
  <div>
    <BrowserRouter>
     <Appbar />
     <Routes>
       <Route path="/Dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
       <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
     </Routes>
    </BrowserRouter>
  </div>
  )
}

// useNavigate can be used only inside the BrowserRouter Comp
function Appbar() {
  const navigate = useNavigate();
  return <div>
    <div>
      <button onClick={() => {
        navigate("/");
      }}>Landing Page</button>
      <button onClick={() => {
        navigate("/dashboard");
      }}>Dashboard</button>
    </div> 
  </div>
}

export default App
