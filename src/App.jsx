import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import Content from './components/Content.jsx'
//import FadeIn from 'react-fade-in';
import Fade from 'react-reveal/Zoom';
function App() {

  return (
    <Fade>
      <Home />
      <Services />
      <Content />    
    </Fade>
    
  )
}

export default App
