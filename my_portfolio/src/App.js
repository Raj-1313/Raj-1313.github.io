
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/AboutMe/About"
import Contect from "./Components/Contect/Contect"
import Skills from "./Components/Skills/Skills"
import Project from "./Components/Projects/Projects"
import { Box, Flex, Grid, Hide } from '@chakra-ui/react';


function App() {


  return (
    <div className="App" >
      <Grid  templateColumns="15% 83%"
      gap="2%"
      >

        <Box>
      <Navbar />
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
