import React from 'react';
import Marquee from "react-fast-marquee";
import {theme} from './theme.skills'
import './Skills.css'
import { skillsImage } from './skillsImage'
import { Box, Hide } from '@chakra-ui/react';

function Skills() {
 const skillsData = [
   'HTML',
   'Javascript',
   'CSS',
   'React',  
   "typescript"
]
 const skillsData1 = [     
   'MongoDB',   
   'canva',
   "bootstrap",
   
]


    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <Box id ="skills" className="skills1"  >
            <div className="skillsHeader">
                <h2>Skills</h2>
            </div>
            <div className="skillsContainer" >
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 
                                style={{color: theme.tertiary}}
                                >
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                    <Hide below='md'>
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="right"
                    >
                        {skillsData1.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 
                                
                                >
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                    </Hide>
                </div>
            </div>
        </Box>
    )
}

export default Skills