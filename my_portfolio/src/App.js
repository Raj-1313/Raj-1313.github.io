
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/AboutMe/About"
import Contect from "./Components/Contect/Contect"
import Skills from "./Components/Skills/Skills"
import Project from "./Components/Projects/Projects"


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage/>
      <About/>
      <Skills/>
      <Project/>
      <Contect/>
          </div>
  );
}

export default App;
