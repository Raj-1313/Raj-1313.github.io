import React from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'
import { skillsImage } from './skillsImage'
import { Box} from '@chakra-ui/react';

function Skills() {
 const skillsData = [
   'HTML',
   'Javascript',
   'CSS',
   'React',  
   "typescript",
   "express", 
]
 const skillsData1 = [     
   'mongodb',   
   'canva',
   "bootstrap",
   "nodejs",
   "chakra",
   "git"
]


    const skillBoxStyle = {
        backgroundColor: '#eaeaea',
        boxShadow: `0px 0px 30px #E9AD354d`
       
    }

    return (
        <Box id ="skills" className="skills1"    pt={{sm:'30px'}}>
            <Box pt={{sm:'30px'}} className="skillsHeader">
                <h2>Skills</h2>
            </Box>
           
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
                                style={{color: '#212121'}}
                                >
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                    {/* <Hide below='md'> */}
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
                    {/* </Hide> */}
                </div>
         
        </Box>
    )
}

export default Skills