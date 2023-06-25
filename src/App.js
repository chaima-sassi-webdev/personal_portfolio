import React, {useState, useEffect, useRef } from 'react';
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import {Education} from './components/Educations';
import { FaArrowUp } from 'react-icons/fa';
import { Certification } from "./components/certifications";
const App = () => {

  AOS.init();

  return (
    <>
   
     <div className="App">
    
      <NavBar />
      <Banner />
      <Education />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </div>
    {/* <canvas ref={canvasRef} width={400} height={400} />; */}
    </>
  )
};

export default App;
