import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function About() {

    const { theme } = useContext(ThemeContext);
    const words1 = aboutData.description1
    const words2 = aboutData.description2
    return (
        <div className="about dark:bg-grid-white/[0.4] bg-grid-black/[0.4]  flex items-center justify-center" id="about" style={{ backgroundColor: theme.secondary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                    <Zoom >
                        <p style={{ color: theme.tertiary80 }} className='mb-5' > {words1}</p>
                        <br></br>
                        <br></br>
                        <p style={{ color: theme.tertiary80 }}> {words2}</p>
                    </Zoom>
                </div>
                <div className="about-img">
                    <img
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
                        alt=""
                    />
                </div>
            </div>
        </div>

    )
}

export default About
