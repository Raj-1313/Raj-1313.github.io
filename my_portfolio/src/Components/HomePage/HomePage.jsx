import { Box, Button, Flex, Grid,  Img,  Text } from "@chakra-ui/react";
import React from "react";
import Type from "../../Parts/type";
import { TypeDot } from "../../Parts/type";
import portfolioImg from "../../img/portfolioImg.png";
import {motion} from 'framer-motion'
const HomePage = () => {
  return (
    <Grid  
    pt={{sm:'70px'}}
      templateColumns={{
        lg: "repeat(2,1fr)",
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        sm: "repeat(1,1fr)",
      }}
      h={{lg:'100vh'}}
    
      p="5%"
      mb='30px'
      alignContent="center"
      // border="1px solid red"
      id="home"
    >
      <Flex flexDir='column' justifyContent='center'  textAlign='left' className="i-name" py='20' >
        <Box>
        <div style={{ display: "flex"}}>
          <Text fontSize={{ base: "sm", sm: "md", md: "2xl", lg: "3xl" }}>       
            Hello I Am
          </Text>
          <TypeDot /> </div>

        <Text
          className="yellowText"
          fontSize={{ base: "30px", sm: "40px", md: "3rem", lg: "3.2rem" ,xl: "4rem" }}
          _hover={{color:'brown'}}
          fontWeight='bold'
          bgGradient="linear(to-b, #fdc50f, #fb982f)"
          bgClip="text"
          >
          Raj Rathor...
            </Text>
            </Box>
       
        <Text
        color='rgb(161, 160, 153)'
          lineHeight={{ base: "20px", sm: "23px", md: "24px", lg: "26px",xl:"35px" }}
          fontSize={{ sm: "16px", md: "16px", lg: "18px",xl:"20px" }}
        >
          Looking for a suitable work opportunity,
          preferably in an IT company, which renders a challenging career,
          providing the opportunities to enhance my educational and technical
          skills 
          <br />
          <br />
          
          <hr />
          {/* that ultimately deliver maximum benefit to the company and
          scale a new high in my career. */}
          {/* 
          Full Stack Web Developer with good level of knowledge in web designing  and development, producting the Quality work. 
          I have a passion for coding and get most enjoyment from solving problems with writing elegant/maintainable code and sharing knowledge */}
             {/* <Text fontSize="2.5rem" >
              <Text color='coral'>EDUCATION </Text>
            </Text>
           <p>
              <span>Dreamer</span> | <span>Learner</span> |
              <span>Executor</span>
            </p> */}
        <Type />
        </Text>
      </Flex>

      {/* <Hide below="md"> */}
        <Box display='flex'  maxW={{ sm: "60%",md:'80%' }}     alignItems='center' m='auto'  borderRight="4px" overflow='hidden' borderRadius="40%"   borderColor="#fb982f"
        // border='1px solid red'
        >
          <motion.div
           initial={{x:'400px',opacity:0}} 
           animate={{x:'0',opacity:1}} 
           transition={{delay:'0.2',duration:'1.5'}}
          >

          <Img 
            className="profileimg"
            src={portfolioImg}              
               p='4'
            alignItems="center"
            alt="no img"   objectFit='cover' 
            />
            </motion.div>
        </Box>
      {/* </Hide> */}
    </Grid>
  );
};

export default HomePage;
