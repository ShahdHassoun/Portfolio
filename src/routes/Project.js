import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import ProjectsList from '../components/ProjectsList'
const Project = ()=> {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my recent works"/>
      <ProjectsList/>
      <Footer/>
    </div>
  )
}

export default Project