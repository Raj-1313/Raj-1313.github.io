import { Box, Container, Flex, Grid, Hide, Image, Img, Show, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import "./HomePage.css"
import vector from '../../img/Vector2.png'
import Type from '../../Parts/type'
import {TypeDot} from '../../Parts/type'
import vave from '../../img/Vector1.png'
import portfolioImg from '../../img/portfolioImg.png'
import gif from '../../img/gif_hi.gif'
const HomePage = () => {

    const transition = { duration: 2, type: "spring" };

  return (
  
<Box  h='100vh' pos='relative' >
      <Grid templateColumns={{lg:'repeat(2,1fr)',base:'repeat(1,1fr)',md:'repeat(1,1fr)',sm:'repeat(1,1fr)'}} id='home'  h='80vh' pt='12rem' >
<Container className='i-name'>
  <div style={{display:"flex"}}> 
  
  <img className='img_gif' src={gif} alt="Hiii" style={{backgroundColor:'#fb982f', borderRadius:'20%', position:'relative', bottom:'20px', marginRight:'20px',mixBlendMode:'luminosity', p:'10',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}} width='80vw'/>
<Text fontSize={{base:'sm',sm:'sm',md:'md',lg:'xg'}} style={{ color: "darkMode" ? "white" : "" }}>  I Am</Text><TypeDot/>
  </div>
        

          <Text className='yellowText' fontSize={{base:'3rem',sm:'3rem',md:'3rem',lg:'4rem'}}>Raj Rathor...</Text>
          <Hide below='md'>
          <span >
            Full Stack Web Developer with good level of knowledge in web designing
            and development, producting the Quality work. 
            I have a passion for coding and get most enjoyment from solving problems with writing elegant/maintainable code and sharing knowledge
          </span>
          </Hide>
              
       <Type></Type>
</Container>



<Hide  breakpoint='(max-width: 1069px)'>
<Container className="i-right">
    
<Img  src={vector} alt="no img" position='relative' top='-10' />   
<Img position='absolute' top='-8' left='-5'  zIndex='-1'   src={vave} alt="no img" />
<Img position='absolute' bottom='20' className='profileimg'  zIndex='2' w='79%'  src={portfolioImg} alt="no img" />
   

</Container>
</Hide>


{/* <Show breakpoint='(max-width: 1068px)'>
    <Img src={portfolioImg} w='30%' position='absolute' top='100' right='120' ></Img>
</Show > */}

       </Grid>
      </Box>
    
  )
}

export default HomePage
