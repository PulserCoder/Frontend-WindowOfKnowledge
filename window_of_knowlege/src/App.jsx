import { useState } from 'react'
import './App.css'
import Chat from "./Chat/Chat.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chat />
    </>
  )
}

export default App
