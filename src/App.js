import React, { useEffect, useRef } from 'react';
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
const App = () => {
  

  return (
    <>
     <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    {/* <canvas ref={canvasRef} width={400} height={400} />; */}
    </>
  )
};

export default App;
