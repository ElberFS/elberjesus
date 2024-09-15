import { useState } from 'react'

import './App.css'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Project from './components/project/Project'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Home />
      <Skills />
      <Project />
      <Footer />

    </div>
  )
}

export default App
