import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import about1 from"../assets/r1.jpg"
import about2 from"../assets/r2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react front-end developer.I create
                 responsive and user-friendly websites 
                 for my clients.</p>
            <Link to="/contact">
            <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={about1}  className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                <img src={about2}  className="img" alt="true" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent