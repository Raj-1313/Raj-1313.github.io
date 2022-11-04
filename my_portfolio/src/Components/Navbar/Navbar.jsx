import React from "react";
import {  Menu,  Flex,  Text,  Box,  Show,  Hide,  MenuButton,  MenuList,  IconButton, Grid, Wrap, WrapItem, Avatar,} from "@chakra-ui/react";
import NavbarIcons, { NavbarIcons1 } from "../../Parts/NavbarIcons";
import {  AttachmentIcon,  ChatIcon,  EditIcon,  HamburgerIcon,  InfoIcon,  PhoneIcon,  StarIcon,} from "@chakra-ui/icons";
import "./Navbar.css";

export default function Home() {
  const data = [
    {
      url: <ChatIcon />,
      title: "Home",
      id: "home",
    },
    {
      url: <InfoIcon />,
      title: "About Me",
      id: "about",
    },
    {
      url: <StarIcon />,
      title: "Skills",
      id: "skills",
    },
    {
      url: <EditIcon />,
      title: "Projects",
      id: "project",
    },
    {
      url: <PhoneIcon />,
      title: "Github",
      id: "Github",
    },
    {
      url: <PhoneIcon />,
      title: "Contect",
      id: "contect",
    }, 
    {
      url: <AttachmentIcon />,
      title: "Resume",
      id: "resume",
    },
  ];

  return (
    <>
      <Show below="md">
      <Flex  pos='fixed'  w='100vw' background='black' zIndex={"2"} h='20' borderBottomRadius='20px' alignItems='center' justifyContent='space-between' p='5' borderBottom='1px solid #fdc50f'>
       
       
      <Box  className="n-signature">
            <Text
              fontSize={{ base: "sm", sm: "md", md: "3xl", lg: "2xl" }}
              style={{ fontFamily: "Playball" }}
              bgGradient="linear(to-b, #fdc50f, #fb982f)"
              bgClip="text"
              p="3"
              borderLeft ="4px"
              borderRadius="45%"
              borderColor="#fb982f"
            >            
              Raj Rathor
            </Text>
          </Box>

        
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            transition='all 0.2s'
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme='yellow'
            _hover={{ bg: 'gray.400' }}
            _focus={{ boxShadow: 'outline' }}
          />
          <MenuList bg= 'linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)' >
            {data.map((ele) => (
              <NavbarIcons props={{ url: ele.url, title: ele.title , id : ele.id}} />
            ))}
          </MenuList>
        </Menu>
       </Flex>
      </Show>

  
     <Show above="md" >

     <Box pos='absolute' right='6' top='4' className="n-signature" zIndex='3' >
     <Wrap >
  <WrapItem>
    <Avatar name='RAJ RATHOR' src='https://static.vecteezy.com/system/resources/thumbnails/013/062/986/small/glasses-logo-design-spectacles-icon-design-template-free-vector.jpg' />
  </WrapItem>
     </Wrap>
          </Box>
      
          <Box  pos="fixed" w='200px' backgroundColor='black' borderRight='3px solid #fdc50f'  borderRightRadius='30px'   >
          <Box
            textAlign="center"
            p="10px"
            mt="10"         
           h='95vh'             
          >
            <Menu>
              <Flex flexDirection="column" gap="10px" alignItems="center">
                {data.map((ele) => (
                  <NavbarIcons1
                    key={ele.id}
                    props={{ id: ele.id, url: ele.url, title: ele.title }}
                  />
                ))}
              </Flex>
            </Menu>
          </Box>
        </Box>
      </Show>




 

    </>
  );
}
