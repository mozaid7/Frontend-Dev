import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// lazy lets you defer loading component’s code until it is rendered for the first time.
import {lazy, Suspense, useState} from 'react';
const Landing = lazy(() => import ('./Components/Landing'))
const Dashboard = lazy(() => import ('./Components/Dashboard'))


// Context-API
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  )
}

function Count({count, setCount}) {
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount} />
  </div>
}

function CountRenderer({count}) {
  return <div>
    {count}
  </div>
}

function Buttons({count, setCount}) {
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}



// Prop-Drilling
// function App() {
//  const [count, setCount] = useState((0));

//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   )
// }

 // Because <Buttons> comp. needs {setCount}, we have to pass it in <Count> however <Count> does not need {setCount}. This is known as Prop-drilling.
// function Count({count, setCount}) {
//  return <div>
//   {count}
//   <Buttons count={count} setCount={setCount} />
//  </div>
// }

// function Buttons({count, setCount}) {
//  return <div>
//    <button onClick={() => {
//      setCount(count + 1)
//    }}>Increase</button>
//    <button onClick={() => {
//      setCount(count - 1)
//    }}>Decrease</button>
//   </div>
// }


// Routing 
// <Suspense> lets you display a fallback until its children have finished loading.
// function App() {
//   return (
//   <div>
//     <BrowserRouter>
//      <Appbar />
//      <Routes>
//        <Route path="/Dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
//        <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
//      </Routes>
//     </BrowserRouter>
//   </div>
//   )
// }

// // useNavigate can be used only inside the BrowserRouter Comp
// function Appbar() {
//   const navigate = useNavigate();
//   return <div>
//     <div>
//       <button onClick={() => {
//         navigate("/");
//       }}>Landing Page</button>
//       <button onClick={() => {
//         navigate("/dashboard");
//       }}>Dashboard</button>
//     </div> 
//   </div>
// }

export default App
