import './HeroImg2Styles.css'
import React from 'react'

const HeroImg2 = (props) => {
  return (
    <div className='heroImg'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroImg2