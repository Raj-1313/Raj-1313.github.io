
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/AboutMe/About"
import Contect from "./Components/Contect/Contect"
import Skills from "./Components/Skills/Skills"
import Project from "./Components/Projects/Projects"
import { Box,  Grid } from '@chakra-ui/react';
import Calender from './Components/Github/Calender';




function App() {


  return (
    <div className="App" >
      <Grid 
       templateColumns={{base:'100%',sm:"100%",md:"200px auto" ,lg:"200px auto"}}
      // gap={{lg:'2%'}}     
      >

        <Box><Navbar/></Box>

        <Box className='container'>

        <HomePage/>
        <About/>
        <Skills/>
        <Project/> 
        <Calender />     
        <Contect/>  
      
        </Box>
    </Grid>
           </div>
  );
}

export default App;
