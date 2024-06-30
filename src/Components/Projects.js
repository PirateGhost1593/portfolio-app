import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";
import colorSharp1 from "../assets/img/banner-bg2.jpg";
import projImg1 from "../assets/img/torrens.png";
import projImg2 from "../assets/img/EV.png";
import projImg3 from "../assets/img/pickaspot.png";
import projImg4 from "../assets/img/linkedin_clone.png";
import projImg5 from "../assets/img/maldives.jpeg";
import projImg6 from "../assets/img/BurnaBoy.jpeg";

export const Projects = () => {
  const ux = [
    {
      title: "Torrens BlackBoard",
      description: "UX & UI Design",
      imgUrl: projImg1,
      projUrl: "/project",
    },
    {
      title: "EVLocate",
      description: "UX & UI Design",
      imgUrl: projImg2,
      projUrl:
        "https://www.figma.com/proto/GrWtNALQFrtnzXXAs7v9Ub/EVLocate_Wireframe?page-id=0%3A1&type=design&node-id=3-278&viewport=453%2C-347%2C0.5&t=Js3pxbxO0jwFigSo-1&scaling=min-zoom&starting-point-node-id=3%3A278&mode=design",
    },
    {
      title: "PickaSpot",
      description: "UX & UI Design",
      imgUrl: projImg3,
      projUrl:
        "https://www.figma.com/proto/4x6FLlPuMdjnCukR5wctyY/Easy-Parking?page-id=0%3A1&type=design&node-id=3-13&viewport=592%2C289%2C0.25&t=ieiwY4pgWS6GOphN-1&scaling=scale-down&starting-point-node-id=3%3A13&show-proto-sidebar=1&mode=design",
    },
  ];

  const web = [
    {
      title: "Linkedin Clone",
      description: "Design & Development with React",
      imgUrl: projImg4,
      projUrl: "https://mn124q.csb.app/",
    },
    {
      title: "Maldives",
      description: "Design & Development with Wordpress",
      imgUrl: projImg5,
      projUrl: "https://jxo76x.csb.app/",
    },
    {
      title: "Burna Boy",
      description: "Dynamic Component Development",
      imgUrl: projImg6,
      projUrl: "https://lpg6k4.csb.app/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              interested in creative intuitive and Inclusive designs with
              experiences in Coding and Data Visualization
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">UX/UI</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Others</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {ux.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {web.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp1} />
    </section>
  );
};
