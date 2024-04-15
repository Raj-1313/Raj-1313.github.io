import React from "react";
import { Box,  Grid, Img, Text } from "@chakra-ui/react";
import "./About.css";
const About = () => {
  return (
    <Box id="about" pt={{base:'70px',lg:'2'}} mb='20px'>      
         <Box  className="skillsHeader">
                <h2>About</h2>
            </Box>

    <Box p='4'
    >
     
      <Text
      w='90%'
      textAlign={'left'}
        color='rgb(161, 160, 153)'
          lineHeight={{ base: "20px", sm: "23px", md: "24px", lg: "26px",xl:"35px" }}
          fontSize={{ sm: "16px", md: "16px", lg: "18px",xl:"20px" }}
        >
With a focus on performance optimization, I thrive on the challenge of enhancing efficiency without compromising functionality. I believe in the power of data visualization to drive informed decision-making, and my work at Zinier reflects this dedication to empowering users through accessible, high-performance tools.

When I'm not coding, you can find me exploring new technologies, experimenting with design patterns, or simply enjoying a good cup of coffee while brainstorming my next project. Let's connect and collaborate to build something incredible together!
          {/* Full Stack Web Developer with good knowledge in web designing and development, creating Quality projects. 
          Having passion for coding and get most enjoyment from solving problems with writing elegant/maintainable code and sharing knowledge */}
        
        </Text>
        
    </Box>


        <Grid display="grid" gap='9' gridTemplateColumns={{sm:"repeat(1,1fr)" ,md:"repeat(2,1fr)" ,lg:'30% 65%' }}pt="40px">

<Box mt={{lg:'20', md:'auto'}}>  
  <Img className="blob" src="https://thumbs.dreamstime.com/b/programmer-freelancer-business-person-sitting-working-alone-desk-vector-illustration-135388948.jpg" />    {/* https://miro.medium.com/max/1400/1*LEH5tUEQReWe8Iu-UEV3Pg.gif */}
</Box>

          <Box m="10px 25px">
             <Text fontSize="2.5rem" >
              <Text color='coral'>EDUCATION </Text>
            </Text>
           <p>
              <span>Dreamer</span> | <span>Learner</span> |  <span> Executor</span>
            </p>
            <hr />
           

  <Box className="qualification__sections" mt='10' >
  
                    {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
                    <div className="qualification__content qualification__active" data-content id="education">
                    <div className="qualification__data">
                            <div></div>

                            <div>
                                <div className="qualification__rounder"></div>
                                <div className="qualification__line"></div>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Developer (SDE1)</h3>
                                <span className="qualification__subtitle">Zinier Pvt technologies < br/>Namma Bengaluru, Karnataka</span>
                                <div className="qualification__celendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - 2024
                                </div>
                            </div>
                        </div>
                  
                        {/* <!--==================== QUALIFICATION 1 ====================--> */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Web Development (Full Time)</h3>
                                <span className="qualification__subtitle">Masai School< br/> Bengaluru, Karnataka</span>
                                <div className="qualification__celendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - 2023
                                </div>
                            </div>

                            <div>
                               
                                <div className="qualification__rounder"></div>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        {/* <!--==================== QUALIFICATION 2 ====================--> */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <div className="qualification__rounder"></div>
                                <div className="qualification__line"></div>
                            </div>

                            <div>
                                <h3 className="qualification__title"> B-Tech in Civil Engineering</h3>
                                <span className="qualification__subtitle">Vedant college of engineering & technology < br/> Kota, Rajasthan.</span>
                                <div className="qualification__celendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017 - 2021
                                </div>
                            </div>
                        </div>

                        {/* <!--==================== QUALIFICATION 3 ====================--> */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Higher Secondary Education</h3>
                                <span className="qualification__subtitle">Maharishi Sr. Sec School< br/> Kota, Rajasthan.</span>
                                <div className="qualification__celendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016 - 2017
                                </div>
                            </div>

                            <div>
                                <div className="qualification__rounder"></div>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        {/* <!--==================== QUALIFICATION 4 ====================--> */}
                     

                  
                 
                </div>
                </Box>
          </Box>

       
        </Grid>
      
    </Box>
  );
};

export default About;

