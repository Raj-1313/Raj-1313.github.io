import React from "react";
import { Box, Container, Flex, Grid, Img, Text } from "@chakra-ui/react";
import "./About.css";
const About = () => {
  return (
    <Box  id="about"  p='10' >      
         <div className="skillsHeader">
                <h2>About</h2>
            </div>
        <Grid display="grid" gap='9' gridTemplateColumns={{sm:"repeat(1,1fr)" ,md:"repeat(2,1fr)" ,lg:'30% 65%' }}pt="40px">

<Box mt={{lg:'20', md:'auto'}}>
  <Img src='https://miro.medium.com/max/1400/1*LEH5tUEQReWe8Iu-UEV3Pg.gif' />
</Box>

          <div className="details">
             <h2 className="about-title">
              <span className="name">EDUCATION </span>
            </h2>
           <p>
              <span>Dreamer</span> | <span>Learner</span> |{" "}
              <span>Adventurer</span>
            </p>
            <hr />
           
          
            

  <Box className="qualification__sections" mt='10' >
  
                    {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
                    <div className="qualification__content qualification__active" data-content id="education">
                        {/* <!--==================== QUALIFICATION 1 ====================--> */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Web Development (Full Time)</h3>
                                <span className="qualification__subtitle">Masai School.< br/> Bengaluru, Karnataka.</span>
                                <div className="qualification__celendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - Present
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
                                <span className="qualification__subtitle">Vedant college of engineering & technology </span>
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
                                <span className="qualification__subtitle">Maharishi Sr. Sec School</span>
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
          </div>

{/* section 3 */}
          {/* <Box> 
         <h2 className="about-title">
              About <span className="name">SELF </span>
            </h2>
            <table className="title">
              <tr>
                <th>Name:</th>
                <td>RAJ RATHOR</td>
              </tr>
              <tr>
                <th>Birthdate:</th>
                <td>+91 9784070693</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>raj1rathore.1@gmail.com</td>
              </tr>
              <tr>
                <th>District:</th>
                <td>KOTA</td>
              </tr>
              <tr>
                <th>Hobby:</th>
                <td>WEB DEVELOPMENT & TRAVELLING</td>
              </tr>
            </table>
        </Box>  */}
        </Grid>
      
    </Box>
  );
};

export default About;

