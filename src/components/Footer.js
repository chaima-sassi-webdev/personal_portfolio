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
            
          
            <p align = "align-items-center">Made By 💘 </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
