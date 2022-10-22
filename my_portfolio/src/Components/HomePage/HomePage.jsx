import { Box, Flex, Grid, Hide, Img, Show, Text } from "@chakra-ui/react";
import React from "react";
import "../HomePage/HomePage.css";
import Type from "../../Parts/type";
import { TypeDot } from "../../Parts/type";
import vave from "../../img/Vector1.png";
import portfolioImg from "../../img/portfolioImg.png";

const HomePage = () => {
  return (
    <Grid
      templateColumns={{
        lg: "repeat(2,1fr)",
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        sm: "repeat(1,1fr)",
      }}
      h="100vh"
      p="5%"
      alignContent="center"
      // border="1px solid red"
      id="home"
    >
      <Box className="i-name">
        <div style={{ display: "flex", lineHeight: "100px" }}>
          <Text fontSize={{ base: "sm", sm: "md", md: "2xl", lg: "3xl" }}>       
            Hello I Am
          </Text>
          <TypeDot />
        </div>

        <Text
          className="yellowText"
          fontSize={{ base: "30px", sm: "40px", md: "3rem", lg: "4rem" }}
          bgGradient="linear(to-b, #fdc50f, #fb982f)"
          bgClip="text"
        >
          Raj Rathor...
        </Text>
        <Text
          lineHeight={{ base: "20px", sm: "23px", md: "28px", lg: "35px" }}
          fontSize={{ sm: "17px", md: "18px", lg: "20px" }}
        >
          Full Stack Web Developer, looking for a suitable work opportunity,
          preferably in an IT company, which renders a challenging career,
          providing the opportunities to enhance my educational and technical
          skills that ultimately deliver maximum benefit to the company and
          scale a new high in my career.
          {/* Full Stack Web Developer with good level of knowledge in web designing  and development, producting the Quality work. 
          I have a passion for coding and get most enjoyment from solving problems with writing elegant/maintainable code and sharing knowledge */}
        </Text>

        <Type />
      </Box>

      <Hide below="md">
        <Flex className="i-right"  justifyContent='center' alignItems='center'>
          <Img
            className="profileimg"
            src={portfolioImg}              
            maxW={{ md: "55%", lg: "65%" }}
            maxH={{ md: "55%", lg: "65%" }}
            alignItems="center"
            alt="no img"
          
            p="5"
            borderRight="4px"
            borderRadius="50%"
            borderColor="#fb982f"
              />
        </Flex>
      </Hide>
    </Grid>
  );
};

export default HomePage;
