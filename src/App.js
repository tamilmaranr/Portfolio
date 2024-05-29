import React from 'react'
import Header from "./Components/Header/Header"
import TopContainer from './Components/Header/TopContainer/TopContainer'
import SkillContainer from './Components/Header/SkillContainer/SkillContainer'
import ProjectContainer from './Components/Header/ProjectContainer/ProjectContainer'
import "./App.css";
import ExperienceContainer from './Components/Header/ExperienceContainer/ExperienceContainer'
import Contact from './Components/Header/Contact/Contact'

function App() {
  return (
    <div><Header/>
    <TopContainer/>
    <SkillContainer/>
    <ProjectContainer/>
    <ExperienceContainer/>
    <Contact/>
    </div>
    
  )
}

export default App