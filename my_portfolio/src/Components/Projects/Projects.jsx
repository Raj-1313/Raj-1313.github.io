
import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import "./Project.css"
import ProjectCard from './ProjectCard';
const Projects = () => {

const project = [{

  id:2,
  imageUrl: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
  imageAlt: 'Zoom Car',
  techStack: ['HTML','CSS','JavaScript','Bootstrape' ],
  About: 'Rent car application with a very interactive UI and lots of things to learn while working. It provides customers their service at different modes , and allow to hire car and also on rent.',
  Title: 'ZOOM CAR',
  time: 'Completed in 5 Days',
  projectType: 'Group',
  gitlink: 'https://github.com/zuhedshaikh95/low-head-7683',
  deploy: 'https://magical-kashata-a20ef2.netlify.app',
  month:"2 month",
},
{
  id:3,
  imageUrl: 'https://media.istockphoto.com/photos/sunset-in-a-rear-view-mirror-picture-id487091534?k=20&m=487091534&s=612x612&w=0&h=K4F_4wqgIgA8gMGxY91eaTnELmrD_u_5zJ70NNRp_2Q=',
  imageAlt: 'SendinBlue',
  techStack: ["JavaScript", "Bootstrap", "HTML" ,"CSS"  ],
  About: 'Digital marketing website with a clean look and containing mostly video and static sections.  The challenging part is the CSS of it',
  Title: 'SENDINBLUE',
  time: 'Completed in 5 Days',
  projectType: 'Individual',
  gitlink: 'https://github.com/Raj-1313/ossified_church_1296',
  deploy: 'https://boisterous-malabi-45100c.netlify.app',
  month:"3 month",
},
{
  id:1,
  imageUrl: 'https://media.istockphoto.com/photos/sunset-in-a-rear-view-mirror-picture-id487091534?k=20&m=487091534&s=612x612&w=0&h=K4F_4wqgIgA8gMGxY91eaTnELmrD_u_5zJ70NNRp_2Q=',
  imageAlt: 'AirGarage',
  techStack: [ "JavaScript", "HTML" ,"CSS", "React" , "Chakra UI" ],
  About: 'A site that allows users to locate parking along with price and rating while working and enjoyed playing with APIs ',
  Title: 'AIR GARAGE',
  time: 'Completed in 5 Days',
  projectType: 'Individual',
  gitlink: 'https://github.com/Raj-1313/Raj-1313--slow-argument-2201/tree/main/my-app',
  deploy: 'https://my-app-nu-indol.vercel.app',
  month:"1 month",
},{

  id:2,
  imageUrl: 'https://media.istockphoto.com/photos/sunset-in-a-rear-view-mirror-picture-id487091534?k=20&m=487091534&s=612x612&w=0&h=K4F_4wqgIgA8gMGxY91eaTnELmrD_u_5zJ70NNRp_2Q=',
  imageAlt: 'Zoom Car',
  techStack: ['','','','','' ],
  About: '',
  Title: 'ZOOM CAR',
  time: 'Completed in 5 Days',
  projectType: 'Group',
  gitlink: '',
  deploy: '',
}
]
  return (
    <Box id='project'  h='100vh'>    
    
      <Grid templateColumns='repeat(3,1fr)' gap='20px' >
      {
project.map((el)=> { 
   return   <ProjectCard  key={el.id} data={el}  />
  }
  )
}
   </Grid>     
    </Box>
  )
}

export default Projects
