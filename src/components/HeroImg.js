import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/HeroImg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="introImg"src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI,MY NAME IS SHAHD DRAIDI.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light">contact</Link>

            </div>

        </div>
    </div>
  )
}

export default HeroImg