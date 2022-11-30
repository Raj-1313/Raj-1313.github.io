import React from "react";
import "./Project.css";
import {
  Badge,
  Box,
  Container,
  Img,
  Button,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
  const {
    imageUrl,
    Title,
    deploy,
    gitlink,
    imageAlt,
    projectType,
    techStack,
    time,
    About,
    month,
  } = project;

  // https://cdn-icons-png.flaticon.com/512/25/25231.png
  return (
    <Box>
      <Text m="0" py="5">
       
        {Title}---{projectType}
      </Text>
      <Box onClick={() => window.open(deploy)} cursor="pointer">
        <Img
          maxH="200px"
          w="100%"
          borderTop=".5px solid grey"
          borderBottom=".5px solid grey"
          src={imageUrl}
          objectFit="cover"
          alt={`Screenshot of ${imageAlt}`}
        />
      </Box>

      <Container md={{px:"10"}} pb="10">
        <Box>
          <Text> {time} </Text>
          <Text color="whiteAlpha.700"> {About} </Text>
        </Box>




        <HStack     
        flexWrap='wrap'  
          justifyContent={"space-evenly"}
          alignItems={"center"}
          spacing={2}
        >
          {techStack.map((tag, index) => {
            return (
              <Box>
                <Badge variant="subtle" colorScheme="yellow">
                  {tag}
                </Badge>
              </Box>
            );
          })}
        </HStack>






        <Flex justifyContent="space-evenly" mt="4" gap='5'>
          <Button
            onClick={() => window.open(gitlink)}
            style={{
              borderRadius: "12px",
              background:
                "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
              boxShadow: "0px 20px 24px 3px rgba(251,161,40,0,42)",
            }}
          >
            Github
          </Button>
          <Button
            style={{
              borderRadius: "12px",
              background:
                "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
              boxShadow: "0px 20px 24px 3px rgba(251,161,40,0,42)",
            }}
            onClick={() => window.open(deploy)}
          >
            Demo
          </Button>
        </Flex>

        
      </Container>
    </Box>
  );
};

export default ProjectCard;
