import React from 'react'
import {Menu,  MenuButton,  MenuList,  IconButton, Show, Hide, Flex,  Spacer, Text,  Box,} from "@chakra-ui/react"
import NavbarIcons from '../../Parts/NavbarIcons'
import {NavbarIcons1} from '../../Parts/NavbarIcons'
import {  AttachmentIcon, ChatIcon, EditIcon,  HamburgerIcon, InfoIcon, PhoneIcon,  StarIcon } from '@chakra-ui/icons'
import "./Navbar.css"


export default function Home() {
 
const data= [{
  url:<ChatIcon />,
  title:'Home',
  id:'home'

},{
  url:<InfoIcon />,
  title:'About Me',
  id:'about'

},{

  url:<StarIcon />,
  title:'Skills',
  id:'skills'

},{

  url:<EditIcon />,
  title:'Projects',
    id:'project'

}
,{
  url:<PhoneIcon />,
  title:'Contect',
  id:'contect'

}
,{
  url:<AttachmentIcon />,
  title:'Resume',
  id:'resume'

}
]


  return (
 
    
    <Flex  alignItems='center' mt='20px' pos="fixed" w='100vw' top='0'  zIndex='4'>
      <Box className='n-signature'  ml={{lg:'50',xl:"22",sm:"5",md:"7"}}>
        <Text  fontSize={{base:'sm',sm:'md',md:'3xl',lg:'3xl'}}   style={{fontFamily:"Playball"}}  >Raj Rathor</Text>  

       

      </Box>

     <Spacer />

<Box className='n-title'  m='auto'  justifyContent='space-around'  mr={{lg:'20',xl:"22",sm:"10px",md:"27px"}} > 
   <Menu flex='4' > 
  
     <Show above='md'>
      <Flex justifyContent='space-around'>
        {
          data.map((ele)=> <NavbarIcons1 key={ele.id} props={{id:ele.id,url:ele.url,title:ele.title }} /> )
        }
      </Flex>
    </Show>

    <Hide above='md'>
  <MenuButton 
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    />
<MenuList>
    {
      
     data.map((ele)=> 
     <NavbarIcons props={{url:ele.url,title:ele.title }} /> 
    )
}
        
  </MenuList>
  </Hide>

   </Menu> 
   </Box>   
    </Flex>
   
    
  )
}
