import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const baseUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${baseUrl}/todos`)
      const data = await res.json()
      setTodos(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>Vite 889 + React</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.name}>{todo.name}</li>
        ))}
      </ul>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
