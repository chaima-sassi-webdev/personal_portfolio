import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import react from "../assets/img/15.PNG";
import html from "../assets/img/13.PNG";
import css from "../assets/img/css.PNG";
import bootstrap from "../assets/img/bootstrap.png";
import tail from "../assets/img/tail.png";
import java from "../assets/img/js.png";
import express from "../assets/img/ex.png";
import node from "../assets/img/node.png";
import github from '../assets/img/github.png';
import Sass from '../assets/img/sass.png';
import Postman from '../assets/img/postman.png';
import Figma from '../assets/img/figma.png';
import mongo from '../assets/img/mongo.png';
import cSharp from '../assets/img/CSharp.png';
import AspNet from '../assets/img/net.png';
import MySql from '../assets/img/mysql.jpg';
import 'animate.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With a solid background of technical skills and an unwavering desire to surpass myself, I am ready to put my knowledge in IT development at the service of ambitious and innovative projects.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           
                            <div className="item">
                                <img src={github} alt="Image" style={{height:"110px", width:"150px"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>GITHUB</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" style={{height:"110px", width:"150px"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" style={{height:"110px", width:"150px"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={tail} alt="Image" style={{height:"110px", width:"150px"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>TailwindCss</h5>
                            </div>
                            <div className="item">
                                <img src={Sass} alt="Image" style={{height:"110px", width:"150px"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>Sass</h5>
                            </div>
                            <div className="item ">
                                <img src={bootstrap} alt="Image" style={{height:"110px", width:"150px"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5 className="animate__animated animate__bounce">Bootstrap 5</h5>
                            </div>
                            <div className="item">
                                <img src={react} style={{height:"110px", width:"150px"}} alt="Image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={Figma} style={{height:"110px", width:"130px"}} alt="Image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" style={{height:"110px", width:"150px"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>JavaScript</h5>
                            </div>
                              <div className="item">
                                  <img src={express} alt="Image" style={{ height: "110px", width: "150px" }} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>ExpressJs</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" style={{height:"110px", width:"150px"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>NodeJs</h5>
                              </div>
                              <div className="item">
                                  <img src={cSharp} alt="Image" style={{ height: "110px", width: "150px" }} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                  <h5>C#</h5>
                              </div>
                              <div className="item">
                                  <img src={AspNet} alt="Image" style={{ height: "110px", width: "150px" }} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                  <h5>Asp.net</h5>
                              </div>
                              <div className="item">
                                  <img src={MySql} alt="Image" style={{ height: "110px", width: "150px" }} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                  <h5>MySQL</h5>
                              </div>
                            <div className="item">
                                <img src={mongo} alt="Image" style={{height:"110px", width:"150px"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={Postman} alt="Image" style={{height:"110px", width:"150px"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" />
                                <h5>Postman</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
