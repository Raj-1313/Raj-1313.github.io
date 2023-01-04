import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button,  Grid, Img, Input, Text, Textarea, Tooltip } from "@chakra-ui/react";
import "./Contacts.css";
import React from "react";
import "./Contacts.css";
import wave from "../../img/wave.png";
import { socialMediaLinks } from "./Portfolio";
import { RiHeart2Fill, RiSendPlaneFill } from "react-icons/ri";
import { useState } from "react";


const Contect = () => {
const [thoughts,setthoughts]=useState('')
const [senderemail,setSenderEmail]=useState('')
const [alerting,setAlert]=useState(false)

const handleSubmit=(e) => {
  e.preventDefault()
let objData={
  senderemail,thoughts
}
// if(senderemail && thoughts){
//  setAlert(true)
// }
setthoughts("")
setSenderEmail("")
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
<Input type='email' value={senderemail} placeholder="May I know your Email...."  onChange={({target})=>setSenderEmail(target.value)} ></Input>
            <Textarea
            value={thoughts}
            resize='none'
            onChange={({target})=>setthoughts(target.value)}
            focusBorderColor='yellow.400'
            h="200px"
              placeholder="Share amazing thoughts..."
              required=""
              size='lg'
            />
            <Button  type="submit" class="button-53">
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
{/* Footer Section */}


{/* //want  to implement alert when some one click on send button     04/01/2022 */}


{/* {
  alerting && <Alert
   status='success'
   variant='subtle'
   flexDirection='column'
   alignItems='center'
   justifyContent='center'
   textAlign='center'
   height='200px'
 >
   <AlertIcon boxSize='40px' mr={0} />
   <AlertTitle mt={4} mb={1} fontSize='lg'>
     Application submitted!
   </AlertTitle>
   <AlertDescription maxWidth='sm'>
     Thanks for Connecting, I will get back to you soon.
   </AlertDescription>
 </Alert>
} */}

    </Box>
  );
};

export default Contect;
{
  /* <span><TbActivityHeartbeat color='red'/> <RiHeart2Fill  color='red'/><TbActivityHeartbeat /></span> */
}
{/* <Box> 
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
</Box>   */}