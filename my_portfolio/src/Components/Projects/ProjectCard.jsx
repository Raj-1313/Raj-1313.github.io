import React from 'react'
import { Badge, Box, Button, Flex, Grid, Image, Link } from '@chakra-ui/react'
const ProjectCard = (data) => {
    const { imageUrl, Title, deploy,gitlink, imageAlt, projectType, techStack,time,About ,month} = data.data
    // https://cdn-icons-png.flaticon.com/512/25/25231.png
  return (
    <>

<Box    borderWidth='1px' borderRadius='lg' overflow='hidden'>
  <Flex display='none'  pos='relative' top='200px'  alignItems='center' justifyContent='space-around' w='40%' m='auto' >
<Link href={gitlink}> <Image  src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt={imageAlt} w='30%' h='10%' /></Link>
<Link href={deploy}> <Image  src='https://pixsector.com/cache/31d7efc8/av02e62f6a8621196a740.png' alt={imageAlt} w='350px'  /></Link>
 </Flex>

  <Box mb='20px' style={{boxShadow:'rgb(38, 57, 77) 0px 20px 30px -10px'}}  >
 <Image src={imageUrl} alt={imageAlt} h='300px'/> 
  </Box>


 <Box p='6' textAlign='left' >
 <Badge borderRadius='full' px='2' colorScheme='red' mb='4px' >
     {projectType} Project
    </Badge>
  <Box display='flex' alignItems='baseline'>
    <Badge borderRadius='full' px='2' colorScheme='teal'>
     {month} ago
    </Badge>
    <Box
      color='gray.500'    fontWeight='semibold'    letterSpacing='wide'
      fontSize='xs'
      textTransform='uppercase'
      ml='2'
    >
      {time}
    </Box>
  </Box>

  <Box
    mt='1'
    fontWeight='semibold'
    as='h3'
    textAlign='center'
   
  >
    {Title}
  </Box>

  <Box>
    <Box  style={{ backgroundColor:'whiteAlpha'}}  color='gray.400' fontSize='sm' textAlign='left'>
    {About}
    
    </Box>
  </Box>

 <Box display='flex' mt='2' alignItems='center'>
  <Flex gap='3' m='auto' >
    {  techStack.map((ele) => <text >{ele}</text>   )}
      </Flex>   
  </Box>
 </Box> 
 </Box> 
    </>
  )
}

export default ProjectCard

