import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/chaima.mp4';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/gg.png';
import whats from '../assets/img/whats.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
    const numeroTelephone = '56254878'; // Remplacez par votre numéro de téléphone
    const message = ' '; // Remplacez par votre message prérempli

    const urlWhatsApp = `https://wa.me/${numeroTelephone}?text=${encodeURIComponent(message)}`;
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <video src={logo} autoPlay loop muted plays-inline style={{ width: '380px', height: '120px', position:"absolute", top:"0", left:"0" }}  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/chaima-sassi/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100009247496932"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/chaima_sassi99/"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/chaima-sassi-webdev"><img src={navIcon4} alt="" style={{ width: "20px" }} /></a>
                <a href={urlWhatsApp} title="whatsapp icônes"> <img src={whats} style={{ width: "20px" }}  /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
