import { Box } from '@chakra-ui/react';
import {  VerticalTimeline,  VerticalTimelineElement,} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactIcon } from 'react-webtech-animated-icons';
import ProjectCard from './ProjectCard';
import Zoomcar from "../../img/Zoomcar.png";
import airgarage from "../../img/airgarage.png";
// import Sendinlue from "../../img/Sendinlue.png";
const Projects = () => {

  let linearColor =
  // 'linear-gradient(to left, #cb910e, #d3a207, #dab401, #e0c600, #e3d904)';
  'linear-gradient( to bottom, #331992, #3326a2, #3233b3, #2e3fc4, #274bd5, #165cdf, #026ce8, #007cef, #008ee9, #009ad6, #00a3be, #30a8a8 )';

const project = [
  {
    id:6,
    imageUrl: 'https://user-images.githubusercontent.com/107465630/214306318-0d37191d-645e-4ea9-a9a2-04211f06ec46.png',
    imageAlt: 'Vintage Attire',
    techStack: [ "JavaScript", "HTML" ,"CSS", "React" , "Chakra UI","Node","MongoDb","Express","RazorPay" ],
    About: 'The TechWorld is an details oriented website that allows people to make decision before buying electronic goods and services.',
    Title: 'Tech World',
    time: 'Completed in 6 Days',
    projectType: 'Group (Lead)',
    gitlink: 'https://github.com/Raj-1313/TechWorld',
    deploy: 'https://techworld-tau.vercel.app/',
    month:"1 month",
  },
  {
    id:1,
    imageUrl: 'https://i.ibb.co/n1yS2B2/home.png',
    imageAlt: 'Vintage Attire',
    techStack: [ "JavaScript", "HTML" ,"CSS", "React" , "Chakra UI","Node","MongoDb","Express" ],
    About: 'TVA(the vintage attire) is an ecommerce app where you can shop for men, women, kids for home accessories.',
    Title: 'Vintage Arrire',
    time: 'Completed in 6 Days',
    projectType: 'Group (Lead)',
    gitlink: 'https://github.com/Raj-1313/The-Vintage-Attire',
    deploy: 'https://vintageattrie.netlify.app',
    month:"3 month",
  },{
  id:3,
  imageUrl: Zoomcar,
  imageAlt: 'Zoom Car',
  techStack: ['HTML','CSS','JavaScript','Bootstrap' ],
  About: 'Rent car application with a very interactive UI and lots of things to learn while working. It provides customers their service at different modes , and allow to hire car and also on rent.',
  Title: 'ZOOM CAR',
  time: 'Completed in 5 Days',
  projectType: 'Group',
  gitlink: 'https://github.com/zuhedshaikh95/low-head-7683',
  deploy: 'https://magical-kashata-a20ef2.netlify.app',
  month:"6 month",
},
// {
//   id:5,
//   imageUrl:Sendinlue,
//   imageAlt: 'SendinBlue',
//   techStack: ["JavaScript", "Bootstrap", "HTML" ,"CSS"  ],
//   About: 'Sendinblue is the smartest and most intuitive platform for growing businesses and empowering B2B and B2C businesses, ecommerce sellers and agencies to build customer relationships.',
//   Title: 'SENDINBLUE',
//   time: 'Completed in 5 Days',
//   projectType: 'Individual',
//   gitlink: 'https://github.com/Raj-1313/ossified_church_1296',
//   deploy: 'https://boisterous-malabi-45100c.netlify.app',
//   month:"7 month",
// },
{
  id:4,
  imageUrl: airgarage,
  imageAlt: 'AirGarage',
  techStack: [ "JavaScript", "HTML" ,"CSS", "React" , "Chakra UI" ],
  About: 'AirGarage is a full service parking operator and a site that allows users to locate parking along with price and rating.',
  Title: 'AIR GARAGE',
  time: 'Completed in 5 Days',
  projectType: 'Individual',
  gitlink: 'https://github.com/Raj-1313/Raj-1313--slow-argument-2201/tree/main/my-app',
  deploy: 'https://my-app-nu-indol.vercel.app',
  month:"5 month",
},

{
  id:2,
  imageUrl: 'https://user-images.githubusercontent.com/86112788/201525927-fd99c566-1e52-43f0-b948-50f27f912852.PNG',
  imageAlt: 'Fitify',
  techStack: [ "JavaScript", "HTML" ,"CSS", "React" , "Chakra UI","Node","MongoDb","Express" ],
  About: 'FITIFY.com is a fitness website of daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free.',
  Title: 'Fitify',
  time: 'Completed in 5 Days',
  projectType: 'Group',
  gitlink: 'https://github.com/Pragati946/bouncy-donkey-4696',
  deploy: 'https://fitify-lac.vercel.app/',
  month:"4 month",
}
]
 
return (
  <Box  id='project'   pt={{base:'60px',lg:'2'}}> 
     <Box  className="skillsHeader"  mt='5' mb='25'>
                <h2  >PROJECTS</h2>
            </Box>
  <VerticalTimeline lineColor={linearColor}  className="vertical-line">
    {project.map((project) => {
      return (
       
        <VerticalTimelineElement
          key={project.id}
          // className="vertical-timeline-element--project"
          contentStyle={{
            // background: 'white',
            padding:'0px',
            background:'linear-gradient(to bottom, rgba(102,102,102,1) 0%, rgba(18,18,18,1) 0%, rgba(0,0,0,1) 0%, rgba(43,43,43,1) 0%, rgba(77,77,77,1) 0%, rgba(28,28,28,1) 0%, rgba(43,43,43,1) 60%, rgba(187,195,70,1) 100%',
            color: '#fff',
            borderRadius: 15,
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          }}
          contentArrowStyle={{
            borderRight: '7px solid  transparent',
          }}
      
          iconStyle={{
            background: '',
            color: 'white',
            backgroundColor: 'rgb(97, 218, 251)',
          }}
          icon={
            <ReactIcon firstColor="#026ce8"   secondColor="#8ED6FB"   duration={2}  />
          }
        >
          <ProjectCard project={project} />
        </VerticalTimelineElement>
     
      );
    })}
  </VerticalTimeline>
  </Box>
);
  
}

export default Projects
