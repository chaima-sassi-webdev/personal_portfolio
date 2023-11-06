import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Capture0.PNG";
import projImg2 from "../assets/img/coloc.PNG";
import projImg3 from "../assets/img/coloooc.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/rock.PNG";
import todo from "../assets/img/toDo.png";
import Flight from "../assets/img/stage_tunisair.png";
import ERP from "../assets/img/erp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const Academicprojects = [
        {
            title: "Flight_Management",
            description: "September 03, 2023 - November 01, 2023",
            imgUrl: Flight,
        }, 
    {
      title: "We recruit",
      description: " February 01, 2023 - May 05, 2023",
          imgUrl: projImg3,
    },
    {
      title: "ERP",
      description: "February 15, 2022 - June 15, 2022",
      imgUrl: ERP,
    },
   
    {
      title: "E-Commerce App",
      description: "February 15, 2022 - June 15, 2022",
      imgUrl: "chaima",
    }, 
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My projects are a reflection of my creativity and my technical mastery.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Design UI/UX</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Academicprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                         <p style={{ textAlign: "center" }}>In progress</p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                                              <Row>
                                                  <p style={{ textAlign: "center" }}>In progress</p>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
