import React from 'react'
import flower2 from "../images/flower2.png";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-img" style={{ backgroundImage: `url(${flower2})` }}>
                <div className="contact-inner">
                    <div className="contact-text">
                        <h1>Let's work together.</h1>
                        <h2>I'm currently looking for a full-time front end web development job in Calgary or remote and freelance pixel art clients.</h2>
                    </div>
                    <div className="contact-links">
                        <a className="contact-link" href="https://twitter.com/DeadUnicornYYC" target="blank"><i class="fab fa-twitter"></i></a>
                        <a className="contact-link" href="https://www.instagram.com/deadunicornyyc/?hl=en" target="blank"><i class="fab fa-instagram"></i></a>             
                        <a className="contact-link" href="mailto:jesseeisenbart@gmail.com" target="blank"><i class="far fa-envelope"></i></a>
                        <a className="contact-link" href="https://deadunicorngames.itch.io" target="blank"><i class="fab fa-itch-io"></i></a>
                        <a className="contact-link" href="https://www.artstation.com/deadunicornyyc" target="blank"><i class="fab fa-artstation"></i></a>
                        <a className="contact-link" href="https://www.linkedin.com/in/jesse-eisenbart-4b79b0180/" target="blank"><i class="fab fa-linkedin"></i></a>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
