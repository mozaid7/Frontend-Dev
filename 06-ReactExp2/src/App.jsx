import { useEffect, useState, useCallback } from 'react'
import React, { Fragment } from 'react'
import axios from "axios";
import './App.css'



// useEffect hook used to call the todos when 1st mounted
function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
       .then(async function(res) {
          const json = await res.json();
          setTodos(json.todos);
        })
    }, 10000)
  }, [])

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
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