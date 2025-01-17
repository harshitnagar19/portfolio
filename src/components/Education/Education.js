import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="education w-full dark:bg-grid-white/[0.4] bg-grid-black/[0.4]  flex items-center justify-center" id="resume" style={{ backgroundColor: theme.secondary }}>
            <div className="education-body">
                <div className="line-styling pb-[8rem]">
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                <div className="education-description">
                    <h1 style={{ color: theme.primary }}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            percentage={edu.percentage}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={theme.eduimg} alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Education
