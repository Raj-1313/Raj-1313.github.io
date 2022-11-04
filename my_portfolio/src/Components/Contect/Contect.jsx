import { Box, Button,    Grid, Input, Text } from "@chakra-ui/react";
import "./Contacts.css";
import React from "react";
import "./Contacts.css";
import { socialMediaLinks } from "./Portfolio";
import {RiSendPlaneFill} from "react-icons/ri"
const Contect = () => {
  // const [contactsDetails, setContactDetails] = useState("");

  return (
    <Box id="contect" >
      <Box className="contact-me2" p='20px'>
        <Grid templateColumns="repeat(2,1fr)" gap='25' mb='20px'>          
            <div >
              <Text fontSize='xl' className="button-85" >Let's Work Together</Text>
                </div>
         
          <div>
            <Input
            focusBorderColor='yellow.400'
              type="email"
              name="Email"             
              placeholder="Share Email..."
              required=""
            />
            <Button  type="submit" class="button-53">
             <RiSendPlaneFill/>
            </Button>
          </div>
        </Grid>

        <Grid templateColumns={{sm:"repeat(2,1fr)",md:"repeat(2,1fr)", lg:"repeat(3,1fr)"}} gap='10' mt='20px' mb='20px' >
          {socialMediaLinks.map((details) => (
            <Box  m='auto' className="contact-info" key={details.id}  fontSize='13px'
            fontWeight='500' alignContent='center'>
            
      
        <Box w='30px' h='30px' className='button-86'>{details.fontAwesomeIcon}</Box>
            
             
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Contect;
