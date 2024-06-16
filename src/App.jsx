
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import ProjectCards from './Components/ProjectCards'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Experience/>
      <Skills/>
      <Projects/>
    
      <Footer/>
    </>
  )
}

export default App
