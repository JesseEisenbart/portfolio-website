import React from 'react'
import Welcome from "./Welcome";
import About from "./About";
import InfoSection from "./InfoSection"
import Contact from "./Contact"
import Footer from "./Footer"
import plant1 from "../images/plant1.png";
import returnScreenshot from "../images/returnScreenshot.png";
import discoScreenshot from "../images/discoScreenshot.png";
import portfolioScreenshot from "../images/portfolioScreenshot.png";
import returnCover from "../images/returnCover.png";
import lostSoulCover from "../images/lostSoulCover.png";
import neonNightmareCover from "../images/neonNightmareCover.png";
import mech from "../images/mech.png";
import rebirth from "../images/rebirth.png";
import necromancer from "../images/necromancer.png";
import photo1 from "../images/photo1.JPG";
import photo2 from "../images/photo2.JPG";
import photo3 from "../images/photo3.JPG";


const Main = () => {
    return (
        <div className="main">
            <Welcome id="welcome"/>
            <div id="about">
                <InfoSection        
                    infoBackground={undefined} 
                    infoText={{
                        h1: <h1>About.</h1>,
                        h2: <h2>A passionate self-learner, game developer, web developer, and artist.</h2>,
                        p:                 
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
                    }}
                    infoProjects={[

                    ]}
                    last={false}
                />
            </div>
            <div id="webdev">
                <InfoSection        
                    infoBackground={undefined} 
                    infoText={{
                        h1: <h1>Web Dev.</h1>,
                        h2: <h2>Front end development projects and JavaScript.</h2>,
                        p:                 
                            <p>
                                So far I have completed nearly a dozen certificate projects
                                which can be viewed on my <a href="https://codesandbox.io/u/JesseEisenbart" target="blank">CodeSandBox</a> and <a href="https://codepen.io/Jesse-Eisenbart/pens/showcase" target="blank">CodePen</a> profiles.
                                Below are major projects that I completed indepently using JavaScript, ReactJS, JSX, CSS, and HTML.
                            </p>
                    }}
                    infoProjects={[
                        {
                            img: returnScreenshot,
                            h2: <h2>Return Landing Page</h2>,
                            link: "https://jesseeisenbart.github.io/return-landing-page/",
                        },
                        {
                            img: discoScreenshot,
                            h2: <h2>Disco Labels</h2>,
                            link: "https://jesseeisenbart.github.io/return-landing-page/",
                        },
                        {
                            img: portfolioScreenshot,
                            h2: <h2>Personal Website</h2>,
                            link: "https://jesseeisenbart.github.io/return-landing-page/",
                        },
                    ]}
                    last={false}
                />
            </div>
            <div id="game">
                <InfoSection 
                    id="game"
                    infoBackground={undefined} 
                    infoText={{
                        h1: <h1>Game Dev.</h1>,
                        h2: <h2>Game jam and personal projects.</h2>,
                        p:                 
                            <p>
                                I have solo developed 20+ games using Gamemaker Studio 2 under the name Dead Unicorn and have amassed 7000+ downloads on <a href="https://itch.io/" target="blank">itch.io</a>. In 2020 I won the award for <a href="https://www.designandgameawards.com/" target="blank">Best Student Game in Alberta.</a> 
                                You can view all my projects <a href="https://deadunicorngames.itch.io/" target="blank">here</a> and see popular games below.
                            </p>
                    }}
                    infoProjects={[
                        {
                            img: returnCover,
                            h2: <h2>Return</h2>,
                            link: "https://deadunicorngames.itch.io/return-pre-alpha",
                        },
                        {
                            img: lostSoulCover,
                            h2: <h2>Lost Soul</h2>,
                            link: "https://deadunicorngames.itch.io/lost-soul",
                        },
                        {
                            img: neonNightmareCover,
                            h2: <h2>Neon Nightmare</h2>,
                            link: "https://deadunicorngames.itch.io/neon-nightmare/",
                        },
                    ]}
                    last={false}
                />
            </div>
            <div id="art">
                <InfoSection 
                    id="art"
                    infoBackground={undefined} 
                    infoText={{
                        h1: <h1>Art.</h1>,
                        h2: <h2>Digital and pixel art pieces.</h2>,
                        p:                 
                            <p>
                                I have been learning pixel art for 3+ years and have dabbled with digital art.
                                I post all my artwork to <a href="https://www.instagram.com/deadunicornyyc/" target="blank">Instagram</a> and <a href="https://twitter.com/DeadUnicornYYC" target="blank">Twitter</a>.
                                You can find my pixel art portfolio <a href="https://www.artstation.com/artwork/EV9q18" target="blank">here</a> and view some of my favorite art pieces below.
                            </p>
                    }}
                    infoProjects={[
                        {
                            img: necromancer,
                            h2: <h2>The necromancer</h2>,
                            link: "https://twitter.com/DeadUnicornYYC/status/1419013881725218818",
                            
                        },
                        {
                            img: mech,
                            h2: <h2>Scavengers</h2>,
                            link: "https://twitter.com/DeadUnicornYYC/status/1420416256813895687",
                        },
                        {
                            img: rebirth,
                            h2: <h2>Rebirth</h2>,
                            link: "https://twitter.com/DeadUnicornYYC/status/1351960182176190464",
                        },
                    ]}
                    last={false}
                />
            </div>
            <div id="photos">
                <InfoSection 
                    id="photos"
                    infoBackground={undefined} 
                    infoText={{
                        h1: <h1>Photos.</h1>,
                        h2: <h2>Digital photography.</h2>,
                        p:                 
                            <p>
                                I recently started photography, I use a sony A6000 and a Pentax K1000.
                                I post all my photography to <a href="https://www.instagram.com/ironbeardphotography/" target="blank">Instagram</a>.
                                You can view some of my favorite shots beleow.
                            </p>
                    }}
                    infoProjects={[
                        {
                            img: photo1,
                            h2: <h2>Flower 1</h2>,
                            link: "https://www.instagram.com/ironbeardphotography/",                    
                        },
                        {
                            img: photo2,
                            h2: <h2>Coming in for a landing</h2>,
                            link: "https://www.instagram.com/ironbeardphotography/",
                        },
                        {
                            img: photo3,
                            h2: <h2>Flower 2</h2>,
                            link: "https://www.instagram.com/ironbeardphotography/",
                        },
                    ]}
                    last={true}
                />
            </div>
            <Contact id="contact" />
            <Footer />
        </div>
    )
}

export default Main
