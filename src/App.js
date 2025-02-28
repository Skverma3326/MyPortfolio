import './App.css';
import Login from './components/common/Login';
import Hero from './components/homePage/Hero';
import Navbar from './components/homePage/Navbar';
import About from './components/about/About';
import { Route, Routes } from 'react-router-dom';
import Project from './components/project/Project';
import Skill from './components/skill/Skill';
function App() {
  return (
    <div className=" p-4">
      <Navbar/>     
      <Hero/>
     <About/>
     <Skill/>
     <Project/>
     </div>
     
  );
}

export default App;
