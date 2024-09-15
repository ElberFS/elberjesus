import { useState } from 'react'

import './App.css'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Home />

    </div>
  )
}

export default App
