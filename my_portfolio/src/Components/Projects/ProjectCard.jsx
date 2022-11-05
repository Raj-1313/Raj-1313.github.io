import React from "react";
import './Project.css'
import { Badge, Box, Container, Img, Button,  Text, HStack, Flex } from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
  const {imageUrl,  Title,  deploy,  gitlink,  imageAlt,  projectType, techStack, time,  About, month } = project;

  // https://cdn-icons-png.flaticon.com/512/25/25231.png
  return (
    <Box >
     <Text color='black'> {Title}---{projectType}   </Text>
      <Container onClick={() => window.open(deploy)}>
        <Img
          height="140"
          w='100%'
          border='.5px solid grey'
          src={imageUrl}
          alt={`Screenshot of ${imageAlt}`}
        />
        <Box>
       
          <Text color='black'> {time}   </Text>
          <Text  color='grey'> {About}   </Text>
        </Box>
      </Container>
      <Flex justifyContent='space-evenly' mt='4'>
        <Button          
       onClick={() => window.open(gitlink)}        
         style={{
          borderRadius:"12px",
          background: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
          boxShadow: "0px 20px 24px 3px rgba(251,161,40,0,42)"
      }}   
        >
          Github
        </Button>
        <Button    
  style={{
    borderRadius:"12px",
    background: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
    boxShadow: "0px 20px 24px 3px rgba(251,161,40,0,42)"
}}   
          onClick={() => window.open(deploy)}
         
        >
          Demo
        </Button>
      </Flex>

      <Container>

        <HStack
          direction={"row"}         
        >
          {techStack.map((tag, index) => {
            return <Badge variant="outlined" label={tag} key={index} />;
          })}
        </HStack>
      </Container>

    </Box>
  );
};

export default ProjectCard;