import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaPhone ,FaMailBulk, FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white",marginRight:"2rem"}} />
                    <div>
                        <p>Palestine,West Bank</p>
                        <p>Tulkarm</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}} />
                    +970568172298</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}} />
                    shahd.draidii@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <div className="social">
                <FaFacebook size={30} style={{color:"white",marginRight:"1rem"}} />
                <FaGithub size={30} style={{color:"white",marginRight:"1rem"}} />
                <FaLinkedin size={30} style={{color:"white",marginRight:"1rem"}} />

                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer