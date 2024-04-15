import {  Box, Button,  Grid, Img, Input, Text, Textarea,  Tooltip, useToast } from "@chakra-ui/react";
import "./Contacts.css";
import React from "react";
import "./Contacts.css";
import wave from "../../img/wave.png";
import { socialMediaLinks } from "./Portfolio";
import { RiHeart2Fill, RiSendPlaneFill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";


const Contect = () => {
const [description,setthoughts]=useState('')
const [name,setName]=useState('')
const [email,setSenderEmail]=useState('')
const toast= useToast();

const handleSubmit=async(e) => {
  e.preventDefault()
  if(email.includes("@gmail.com") && name!==""&& description!==""){

    let objData={
      email,description,name
    }
    
    try{
      await axios.post('https://shy-lime-bass-cap.cyclic.app/posts/post',objData)
      toast({
        title: `I Got Your Message.... `,
        status: "success",
        isClosable: true,
      })
      setthoughts("")
       setName("")
      setSenderEmail("")
    }
    catch(err){
      toast({
        title: `Service Closed right now`,
        status: "warning",
        isClosable: true,
      })
    }
  }else{
    toast({
      title: `Information may contain flaws or empty data`,
      status: "info",
      isClosable: true,
    })
  }
// if(senderemail && thoughts){
//  setAlert(true)
// }

}
  return (
    <Box id="contect" mt={{base: "70px",lg:'2' }}  background='#292721aa' borderTopRadius='30'>
      <Box pt={{ sm: "40px" }} className="skillsHeader">
        <h2>Contact Me...</h2>
      </Box>

      <Box className="contact-me2" p='20px'>
        <Grid templateColumns={{lg:"repeat(2,1fr)",md:"repeat(1,1fr)"}} gap='30' >          
            <Box >
              <Text fontSize='xl' className="button-85" >Let's Work Together</Text>

              <Grid templateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)"}}   gap='10' mt='20px' mb='20px' >
          {socialMediaLinks.map((details) => (            
            <Box as='a'  href={details.link} target="_blank"  key={details.id}  fontSize='20px'
            //  alignContent='center' 
            w='30%' m='auto'
            >     
            <Tooltip label={details.contact_info} placement='right-end'>
        <Box
         w='30px' h='30px' p='16px' 
         className='button-86'>{details.fontAwesomeIcon}</Box>                
         </Tooltip>
            </Box>
          ))}
        </Grid>
                </Box>
         
{/* text Area */}

          <form onSubmit={handleSubmit}>
<Input type='email' value={email} placeholder="May I know your Email...."  onChange={({target})=>setSenderEmail(target.value)} />
<Input type='text' value={name} placeholder="May I know your Name...."  onChange={({target})=>setName(target.value)} />
            <Textarea
            value={description}
            resize='none'
            onChange={({target})=>setthoughts(target.value)}
            focusBorderColor='yellow.400'
            h="200px"
              placeholder="Share amazing thoughts..."
              required=""
              size='lg'
            />
            <Button w='100px'  type="submit" className="button-53">
             <RiSendPlaneFill/>
            </Button>
          </form>
        </Grid>

     
      </Box>

{/* Footer Section */}
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems="center"       
        pos="relative"
        overflow="hidden"
      >
          <Text mt='10%' zIndex="10" bg='blackAlpha.500' borderTopColor='#fdc50f' px='3' borderRadius='34'
           fontFamily="Pacifico" 
            fontSize='1.2rem'  >
            Made with
            
            <Box as="Button" p="1">
              <RiHeart2Fill color="red" />
            </Box>
            
            <Box as="Button" p="1"  fontFamily="Kalam" fontWeight='bold' fontSize='1.4rem' >
            by RAJ RATHOR
            </Box>
          </Text>

        <Box pos="absolute"  top="-15">
          <Img zIndex="-12" src={wave}></Img>
        </Box>
      </Box>


    </Box>
  );
};

export default Contect;
