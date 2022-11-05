import { Box, Button,   Flex, Grid,  Text, Textarea } from "@chakra-ui/react";
import "./Contacts.css";
import React from "react";
import "./Contacts.css";
import { socialMediaLinks } from "./Portfolio";
import {RiHeart2Fill, RiSendPlaneFill} from "react-icons/ri"
import {TbActivityHeartbeat} from "react-icons/tb"
const Contect = () => {
  return (
    <Box id="contect"   mt={{sm:'70px'}} >
<Box pt={{sm:'40px'}}  className="skillsHeader">
                <h2>Contact Me...</h2>
            </Box>
      <Box className="contact-me2" p='20px'>
        <Grid templateColumns="repeat(2,1fr)" gap='30' mb='20px'>          
            <div >
              <Text fontSize='xl' className="button-85" >Let's Work Together</Text>

              <Grid templateColumns={{sm:"repeat(2,1fr)",md:"repeat(2,1fr)", lg:"repeat(3,1fr)"}} gap='10' mt='20px' mb='20px' >
          {socialMediaLinks.map((details) => (
            <a href={details.link} target="_blank" >
            <Box  m='auto' className="contact-info" key={details.id}  fontSize='13px'
            fontWeight='500' alignContent='center'>
            
      
        <Box w='30px' h='30px' className='button-86'>{details.fontAwesomeIcon}</Box>           
             
            </Box></a>
          ))}
        </Grid>
                </div>
         
          <div>
            <Textarea
            resize='none'
            focusBorderColor='yellow.400'
            h="200px"
              placeholder="Share thoughts..."
              required=""
              size='lg'
            />
            <Button  type="submit" class="button-53">
             <RiSendPlaneFill/>
            </Button>
          </div>
        </Grid>

     
      </Box>
      <Box border='1px solid red' display={'flex'} justifyContent='center' alignItems='center' w='100%' h='30vh' >
        <Text >
        Made with  by RAJ RATHOR
        </Text>
          
      </Box>
    </Box>
  );
};

export default Contect;
{/* <span><TbActivityHeartbeat color='red'/> <RiHeart2Fill  color='red'/><TbActivityHeartbeat /></span> */}