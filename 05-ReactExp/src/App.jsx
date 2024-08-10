import { useState } from 'react'
import React, { Fragment } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "today at 5"
  },{
    id: 2,
    title: "go to lib",
    description: "today at 6"
  }, {
    id: 3,
    title: "go to mess",
    description: "today at 8"
  }])

function addTodo() {
  setTodos([...todos, {
    id: 4,
    title: "Go to sleep",
    description: "at 10"
  }])
}

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}


// minimizing re-rendering by using React.memo
// function App() {
//   const [title, setTitle] = useState("My name is Zaidy");

//   function updateTitle() {
//     setTitle("My name is " + Math.random())
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title} />
//       <Header title="Zaid2" />
//       <Header title="Zaid2" />
//     </div>
//   )
// }

// const Header = React.memo(function Header({title}) {
//   return <div>
//     {title}
//   </div>
// })

export default App
