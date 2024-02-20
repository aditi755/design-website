import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import Content from './components/Content.jsx'
function App() {

  return (
    <>
      <Home />
      <Services />
      <Content />
    </>
  )
}

export default App
