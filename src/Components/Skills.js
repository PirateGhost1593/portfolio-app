import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Web from "../assets/img/app-development.png";
import Figma from "../assets/img/figma.png";
import Uxui from "../assets/img/ui.png";
import Prototype from "../assets/img/prototype.png";
import Wireframe from "../assets/img/wireframe.png";
import colorSharp from "../assets/img/banner-bg1.jpg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2> Skills </h2>
              <p>
                Prototyping, UX Research, Figma, Wordpress, <br></br>
                Javascript, HTML, CSS, Bootstrap, React...
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={Web} alt="Image" />
                  <h5> Web Development</h5>
                </div>
                <div className="item">
                  <img src={Uxui} alt="Image" />
                  <h5> UX/UI Designer</h5>
                </div>
                <div className="item">
                  <img src={Figma} alt="Image" />
                  <h5> Figma </h5>
                </div>
                <div className="item">
                  <img src={Prototype} alt="Image" />
                  <h5> Prototyping </h5>
                </div>
                <div className="item">
                  <img src={Wireframe} alt="Image" />
                  <h5> Wireframing</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
