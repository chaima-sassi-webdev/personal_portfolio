import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Capture0.PNG";
import projImg2 from "../assets/img/coloc.PNG";
import projImg3 from "../assets/img/coloooc.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/rock.PNG";
import todo from "../assets/img/toDo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Academicprojects = [
    {
      title: "We recruit",
      description: " February 01, 2023 - May 05, 2023",
          imgUrl: projImg3,
    },
    {
      title: "ERP",
      description: "February 15, 2022 - June 15, 2022",
      imgUrl: "chaima",
    }, 
    {
      title: "Quiz",
      description: "February 15, 2022 - June 15, 2022",
      imgUrl: "chaima",
    }, 
    {
      title: "E-Commerce App",
      description: "February 15, 2022 - June 15, 2022",
      imgUrl: "chaima",
    }, 
  ];
  const Personnelprojects = [
    {
      title: "ScopeEvent",
      description: "1 February, 2023 - 3 april , 2023",
      imgUrl: projImg1,
    },
    
    {
      title: "ToDo App",
      //description: "Design & Development",
      imgUrl: todo,
    },
    {
      title: "Rock Paper Scissors",
      //description: "Design & Development",
        imgUrl: projImg4,
    },
    {
      title: "Calculator",
      //description: "Design & Development",
      imgUrl: "chaima",
    },
  ];
  const InternShiprojects = [
    {
      title: "ERP",
      description: "February 15, 2022 - June 15, 2022",
          imgUrl: projImg3
    },
    {
      title: "ColocTunisie",
      description: "01 July 2021- 31 September 2021",
      imgUrl: projImg2,
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
                        {
                          Personnelprojects.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          InternShiprojects.map((project, index) => {
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
