import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/weather-appp.png";
import projImg2 from "../assets/img/chat-appp.png";
import projImg3 from "../assets/img/estore-app.png";
import projImg7 from "../assets/img/stud-app.png";
import projImg8 from "../assets/img/grad-view.jpg";
import projImg9 from "../assets/img/stockm-app.png";
import projImg4 from "../assets/img/img5.png";
import projImg5 from "../assets/img/img6.png";
import projImg6 from "../assets/img/img7.png";
import projImg10 from "../assets/img/real-estate.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "React Weather App",
      description: "Built using React and the OpenAI API",
      imgUrl: projImg1,
      href: "https://github.com/MarcusMahlatjie/react-weather-app", 
    },

    {
      title: "Realtime Chat App",
      description: "Built using NodeJS, React and ChatEngineIO",
      imgUrl: projImg2,
      href: "https://github.com/MarcusMahlatjie/realtime-chat-app"
    },
    
    {
      title: "Real Estate Website",
      description: "Fullstack React project using the MERN stack (MongoDB, ExpressJS, NodeJS & React)",
      imgUrl: projImg10,
      href: "https://github.com/MarcusMahlatjie/real-estate-website"
    },

    {
      title: "Student Management App",
      description: "Built using C# and the .NET Windowsform Application Framework",
      imgUrl: projImg7,
      href: "https://github.com/MarcusMahlatjie/student-management-app"
    },
    {
      title: "Stock Market App",
      description: "Built using the MERN stack (MongoDB, ExpressJS, NodeJS & React)",
      imgUrl: projImg9,
      href: "https://github.com/MarcusMahlatjie?tab=repositories"
    },
    {
      title: "GraduateView",
      description: "Built using the MERN stack (MongoDB, ExpressJS, NodeJS & React)",
      imgUrl: projImg8,
      href: "https://github.com/MarcusMahlatjie?tab=repositories"
    },
  ];

  const projects2 = [
    {
      title: "Quick Sort",
      description: "C#",
      imgUrl: projImg4,
      href: "https://github.com/MarcusMahlatjie/sorting-algorithm-program/blob/main/sorting-algorithm-program/Program.cs#:~:text=%7D-,//%20QUICK%20SORT%20ALGORITHM,%7D,-//%20MERGE%20SORT"
    },

    {
      title: "Binary Search",
      description: "C#",
      imgUrl: projImg5,
      href: "https://github.com/MarcusMahlatjie/sorting-algorithm-program/blob/main/sorting-algorithm-program/Program.cs#:~:text=%7D-,//%20BINARY%20SEARCH,%7D,-//%20ERROR%20MESSAGE"
    },
    
    {
      title: "Bubble Sort ",
      description: "C#",
      imgUrl: projImg6,
      href: "https://github.com/MarcusMahlatjie/sorting-algorithm-program/blob/main/sorting-algorithm-program/Program.cs#:~:text=SELECTION%20FROM%20USER-,//%20BUBBLE%20SORT%20ALGORITHM,%7D,-//%20QUICK%20SORT"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of the awesome projects that I have been working on to test and improve my skills.
                  They are built on a variety of languages and frameworks. I'm always looking for new and innovative
                  projects to take on.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="Portfolio Projects">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Portfolio Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Code Snippets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Current Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Here are the different apps and websites I've built, click on the card to view the source code
                      on GitHub. </p>
                      <Row>
                        {           
                          projects.map((project, index) => {
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
                      <p>The following are different code snippets of projects I have completed and some usefull
                         snippets that can be used anywhere.</p>
                      <Row>
                        {           
                          projects2.map((project, index) => {
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
                      <p> I am current working on GraduateView, a MERN stack based web app
                        (MongoDB, Express, NodeJS and React) that aims to bridge the gap between
                         new graduates and job opportunities ☁️</p>
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
