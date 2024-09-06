import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import ProjectsList from '../components/ProjectsList'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <ProjectsList/>
      <Footer/>
    </div>
  )
}

export default Home