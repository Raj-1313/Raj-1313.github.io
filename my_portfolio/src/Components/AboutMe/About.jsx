import React from "react";
import { Box, Container, Flex, Grid, Img, Text } from "@chakra-ui/react";
import "./About.css";
const About = () => {
  return (
    <Box  id="about">      
         <div className="skillsHeader">
                <h2>About</h2>
            </div>
        <Grid display="grid" gridTemplateColumns={{sm:"repeat(1,1fr)" ,md:"repeat(2,1fr)" ,lg:"repeat(2,1fr)" }}pt="40px">
          <div className="details">
            <h2 className="about-title">
              About <span className="name">EDUCATION </span>
            </h2>
            <p>
              <span>Dreamer</span> | <span>Learner</span> |{" "}
              <span>Adventurer</span>
            </p>
            <hr />
            <p>
              Hello! welcome to About Section. I'm a web developer. I've skills
              in HTML5,CSS3,Javascript, React, Node, Express, MongoDB.
            </p>
            <h3 className="link">
              <a className="resume" href="#">
                VIEW MY RESUME
              </a>
            </h3>
          </div>
          <Box>
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
          </Box>
        </Grid>
      
    </Box>
  );
};

export default About;

{
  /* 
<Box h='100vh'  border='1px solid' id='about'
//  backgroundImage='https://besthqwallpapers.com/Uploads/20-11-2021/184400/thumb2-arch-linux-carbon-logo-4k-grunge-art-carbon-background-creative.jpg' 
  bgRepeat='no-repeat' bgSize='cover' >
  
  <Flex  gap='4'>
<Box color='black' flex='6' borderRadius="30px" borderBottomRightRadius='0' h='70vh'  mt='20vh' backgroundColor='white'>

<p>Hello  👋, my name is RAJ RAthor and I am a Full Stack Developer, passionate about building digital products that improve everyday experience for people.

I am Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.</p>

</Box>
<Box flex='2' h='70vh' border='1px' mt='20vh'>
<Img  src='https://cdn.dribbble.com/users/1107512/screenshots/3997677/media/0435a89ab9eea9a83e5465156053128a.gif'></Img>

</Box>
</Flex>


</Box>

*/
}
