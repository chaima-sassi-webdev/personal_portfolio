import { useState, useEffect , useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/img1.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
// import './Ball.css'
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "FullStack Developper"];
  const period = 2000;
 const Top = () => {
  window.scrollTo(0,0);
 }
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     const numBalls = 10; // Number of balls to render
//     const balls = [];

//     // Ball class
//     class Ball {
//       constructor(x, y, radius, dx, dy, color) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.dx = dx;
//         this.dy = dy;
//         this.color = color;
//       }
//       draw() {
//         context.beginPath();
//         context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         context.fillStyle = this.color;
//         context.fill();
//         context.closePath();
//       }

//       update() {
//         this.x += this.dx * 1.5; // Adjust the factor to control the speed
//         this.y += this.dy * 1.5; // Adjust the factor to control the speed

//         if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
//           this.dx = -this.dx;
//         }

//         if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
//           this.dy = -this.dy;
//         }

//         this.draw();
//       }
//     }

//       // Define colors for the balls
//       const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF'];

//       // Create and animate balls with specific colors
//       for (let i = 0; i < numBalls; i++) {
//         const x = Math.random() * canvas.width;
//         const y = Math.random() * canvas.height;
//         const radius = Math.random() * 20 + 10; // Random radius between 10 and 30
//         const dx = (Math.random() - 0.5) * 2; // Random horizontal velocity
//         const dy = (Math.random() - 0.5) * 2; // Random vertical velocity
//         const color = colors[i % colors.length]; // Assign colors sequentially
//         const ball = new Ball(x, y, radius, dx, dy, color);
//         balls.push(ball);
//       }

//    // Animation loop
//    const animate = () => {
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     for (let i = 0; i < balls.length; i++) {
//       balls[i].update();
//     }

//     requestAnimationFrame(animate);
//   };

//   animate();

//   // Cleanup
//   return () => cancelAnimationFrame(animate);
// }, []);

  return (
    <section className="banner" id="home">
           {/* <canvas ref={canvasRef} className="banner-canvas"  />; */}
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>{`Hello ! I'm `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "FullStack Developer" ]'><span className="wrap">{text}</span></span></h1>
                                  <p>Tireless explorer and passionate about IT development, I am constantly looking for new knowledge and challenges to feed my curiosity and my creative dynamic. <br/>
                                      <button className="tagline">Download CV </button></p>
                  <a href='#connect' style={{listStyle:"none",textDecoration:"none"}}>
                   <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                  <img src={headerImg} alt="Header Img" style={{
                                      borderRadius: '50%',
                                      width: '250px', // Adjust the width and height as needed
                                      height: '300px',
                                      marginLeft: '25%',
                                      marginTop:'-10%'
                                  }} 
                                  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <button onClick={Top} className="btnTop">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{position: "fixed", top: "555px",right:"15", width:"55px"}}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </button>
    </section>
  )
}
