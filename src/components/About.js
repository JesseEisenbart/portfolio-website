import React from 'react'
import headshot1 from "../images/headshot1.png";

const About = () => {
    return (
        <div className="about">
            <div className="about-left about-section">
            <h1>About.</h1>
            <h2>A passionate self-learner, game developer, photographer, and artist.</h2>
            <p>
                Hi, I’m Jesse Eisenbart. I love to learn and teach myself 
                new things. I have 3+ years developing video games in 
                Gamemaker Studio 2 as a hobby, so far I have created 20+ solo
                projects and won the 2020 award for Best Student Game in Alberta. I’ve been creating pixel art for 3+ years and
                work as a freelancer part time. More recently I have 
                earned FreeCodeCamp certificates in Frontend Development 
                Libraries, Responsive Web Design, and JavaScript Algorithms
                and Data Structures.
            </p>
            </div>
            <div className="about-section">
                <img className="about-img" src={headshot1}/>
            </div>
        </div>
    )
}

export default About
