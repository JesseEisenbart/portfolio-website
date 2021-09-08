import React from 'react'

const InfoSection = ({ infoBackground, infoText, infoProjects, last, first }) => {
    return (
        <div className={`info-container ${last ? "info-container-last" : ""} ${first ? "info-container-first" : ""}`} style={infoBackground !== undefined ? { backgroundImage: `url(${infoBackground})` } : {} }>
            <div className="info">
                <div className={`info-text-section ${infoBackground !== undefined ? "info-color-white" : "info-color-purple"}`}>
                    {infoText.h1}
                    {infoText.h2}
                    {infoText.p}
                </div>
            </div>
            <div className="projects-container">
                { 
                    infoProjects.map((projects) =>
                        <div className="project">
                            <a href={projects.link} target="blank">
                                <div className="project-img" style={{ backgroundImage: `url(${projects.img})` }}>
                                    <div className="project-overlay">
                                        {projects.h2}
                                    </div>
                                </div>
                            </a>              
                        </div>
                    )
                }   
            </div>
        </div>
    )
}

export default InfoSection
