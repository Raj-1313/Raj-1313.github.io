import React from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'
import { skillsImage } from './skillsImage'
import { Box, Flex} from '@chakra-ui/react';

function Skills() {
 const skillsData = [
   'HTML',
   'Javascript',
   'CSS',
   'React',  
   "typescript",
   "redux",
]
const skillsData1 = [     
    'mongodb',   
    "express", 
   'canva',
   "bootstrap",
   "nodejs",
   "chakra",
   "git",
   "Docker",
   "AWS QuickSight"
]


    const skillBoxStyle = {
        backgroundColor: '#eaeaea',
        boxShadow: `0px 0px 30px #E9AD354d`
       
    }

    return (
        <Flex flexDir='column'alignItems='center' id ="skills" className="skills1"  m='auto'  pt={{sm:'30px'}}>
            <Box pt={{sm:'30px'}} className="skillsHeader">
                <h2>Skills</h2>
            </Box>
           
                <Box className="skill--scroll" >
                    <Marquee 
                    
                        gradient={false} 
                        speed={80} 
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <Box className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 
                                style={{color: '#212121'}}
                                >
                                    {skill}
                                </h3>
                            </Box>
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
                                style={{color: '#212121'}}
                                >
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                    {/* </Hide> */}
                </Box>
         
        </Flex>
    )
}

export default Skills