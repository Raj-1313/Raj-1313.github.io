import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import {  
//   CardActionArea,
//   CardActions,
//   SvgIcon,
//   Divider,
// } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";

import { Badge, Box, Container, Img, Button,  Text, HStack } from "@chakra-ui/react";

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
    <Box display="inline-block">
    
      <Container onClick={() => window.open(deploy)}>
        <Img
          height="140"
          src={imageUrl}
          alt={`Screenshot of ${imageAlt}`}
        />
        <Box>
          <Text> {Title}   </Text>
          <Text> {About}   </Text>
        </Box>
      </Container>
      <Container>
        <Button         
          href={gitlink}
          startIcon={<GitHubIcon />}
        >
          Github
        </Button>
        <Button          
          href={deploy}
          startIcon={<PreviewIcon />}
        >
          Demo
        </Button>
      </Container>

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
