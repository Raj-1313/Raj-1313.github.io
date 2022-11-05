import { Box, Flex, Grid,  Image } from "@chakra-ui/react";
import React from "react";

import GitHubCalendar from "react-github-calendar";

function Github() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Box  pt={{sm:'30px'}} w='full'  mt='50px' mb='25' id='Github' >
    
    
        <Box  pt={{sm:'30px'}} className="skillsHeader">
        <h2 > GITHUB STATS </h2>
        </Box>
       
     
     
      <Flex  flexDir='column' align='center' mt='10'>
        <GitHubCalendar
          username="Raj-1313"
          transformData={selectLastHalfYear}          
          />
     
   
      <Grid
         p='5'
        m="16"
        gap={{ base: "3", md: "10" }}
        gridTemplateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
      >
        <Image  src="https://streak-stats.demolab.com/?user=Raj-1313&theme=nord&border_radius=30&date_format=M%20j%5B%2C%20Y%5D" />
        <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Raj-1313&layout=compact&theme=nord&border_radius=30" />
        <Image src="https://github-readme-stats.vercel.app/api?username=Raj-1313&count_private=true&theme=nord&border_radius=30" />
      </Grid>
      </Flex>
    </Box>
  );
}

export default Github;