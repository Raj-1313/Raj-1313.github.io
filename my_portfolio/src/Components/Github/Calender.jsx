import { Box, Flex, Grid,  Image } from "@chakra-ui/react";
import React from "react";
import {motion} from "framer-motion"
import GitHubCalendar from "react-github-calendar";

function Github() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear ||
        monthOfDay > currentMonth - shownMonths ||
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Box  pt={{base:'60px',lg:'2'}} w='full'  mt='50px'  id='Github' >
    
    
        <Box  className="skillsHeader" >
        <h2 > GITHUB STATS </h2>
        </Box>
       
     
     
      <Flex  flexDir='column' align='center' mt='10'>

        <Box padding='4' >
          <motion.div
          
          initial={{x:'400px',opacity:0}} 
          animate={{x:'0',opacity:1}} 
          transition={{delay:'0.2',duration:'1.5'}}
          >

        <GitHubCalendar        
          username="Raj-1313"
          transformData={selectLastHalfYear}    
          width="90vw"      
        
          />
          </motion.div>
          </Box>
     
   
      <Grid
         p='5'
        m="16"
        gap={{ base: "3", md: "10" }}
        width={{base:"100%",md:"auto"}}
        gridTemplateColumns={{ base: "1fr", lg: "repeat(3,1fr)" }}
      >
        

        <motion.div
          initial={{x:'-200px',opacity:0}} 
          animate={{x:'0',opacity:1}} 
          transition={{delay:'0.2',duration:'1.5'}}
          >
        <Image  src="https://streak-stats.demolab.com/?user=Raj-1313&theme=nord&border_radius=30&date_format=M%20j%5B%2C%20Y%5D" />
        </motion.div>

        <motion.div
          initial={{y:'200px',opacity:0}} 
          animate={{y:'0',opacity:1}} 
          transition={{delay:'0.2',duration:'1.5'}}
          >
        <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Raj-1313&layout=compact&theme=nord&border_radius=30" />
        </motion.div>

        <motion.div
          initial={{x:'200px',opacity:0}} 
          animate={{x:'0',opacity:1}} 
          transition={{delay:'0.2',duration:'1.5'}}
          >
        <Image src="https://github-readme-stats.vercel.app/api?username=Raj-1313&count_private=true&theme=nord&border_radius=30" />
        </motion.div>
      </Grid>
      </Flex>
    </Box>
  );
}

export default Github;