import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from '../assets/img/chaima.mp4';
import navIcon4 from "../assets/img/gg.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          {/* <Col size={12} sm={6}>
          <video src={logo} autoPlay loop muted plays-inline style={{ width: '380px', height: '120px'}}  />
          </Col> */}
          <Col size={12} sm={6} className="text-center text-sm-end">
           <div className="social-icon" style={{display:"flex", position:"absolute", right:"32px"}}>
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/chaima-sassi-webdev"><img src={navIcon4} alt="" style={{width:"20px"}}/></a>
            </div>
            <div style={{ display:"flex"}}>
            <div style={{position:"absolute", left:"32px", top:"96%"}}>
              <a href="#home" style={{cursor:"pointer"}}>
              <p style={{left:0, color: "white", float:"left"}}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:"18px"}}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                </svg> &nbsp;
                Home</p><br/>
              </a>
              <a href="#education" style={{cursor:"pointer"}}>
              <p style={{left:0, color: "white", float:"left"}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:"18px"}}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                </svg> &nbsp;
                Education</p>
              </a>
            </div>
            <div className="links" style={{position:"absolute", left:"32px", top:"96%", marginLeft:"150px"}}>
              <a href="#skills" style={{cursor:"pointer"}}>
              <p style={{left:0, color: "white", float:"left"}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:"18px"}}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                </svg> &nbsp;
                Skills</p><br/>
              </a>
              <a href="#projects" style={{cursor:"pointer"}}>
              <p style={{left:0, color: "white", float:"left"}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:"18px"}}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                </svg> &nbsp;
                Projects</p>
              </a>

            </div>
            </div>
            <p align = "align-items-center">Made By 💘 </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
