
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/AboutMe/About"
import Contect from "./Components/Contect/Contect"
import Skills from "./Components/Skills/Skills"
import Project from "./Components/Projects/Projects"
import { Box,  Grid } from '@chakra-ui/react';


function App() {


  return (
    <div className="App" >
      <Grid  templateColumns={{sm:'0 100%',md:"15% 83%"}}
      gap={{lg:'2%',md:"7%"}}
      >

        <Box backgroundColor='whiteAlpha.300' >
      <Navbar  />
        </Box>

        <Box   className='container'>
      <HomePage/>
      <About/>
     <Skills/>
      <Project/> 
    <Contect/>  
        </Box>
    </Grid>
          </div>
  );
}

export default App;
