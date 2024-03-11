
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'

import Navbar from './components/Navbar'
import Project from './components/Project'
import Services from './components/Services'
import Skills from './components/Skills'


function App() {
  
  return (
    <>
    <div >
    
       <Navbar />
       <Hero />
       <About />
       <Skills />
       <Services />
      
      {/*
      <Project />
      <Contact />  */}
    </div>
    </>
  )
}

export default App
