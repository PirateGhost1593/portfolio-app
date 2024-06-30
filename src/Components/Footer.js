import { Container, Row, Col } from "react-bootstrap";
import NavIcon1 from "../assets/img/facebook.png";
import NavIcon2 from "../assets/img/instagram.png";
import NavIcon3 from "../assets/img/linkedin.png";
import logo from "../assets/img/ASBah-logos_white.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-item-center">
        <Col sm={6}>
            <img src={logo} alt="logo" />
        </Col>
        <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href=""><img src={NavIcon1} /></a>
                <a href=""><img src={NavIcon2} /></a>
                <a href=""><img src={NavIcon3} /></a>
            </div>
            <p>CopyRIght 2022. All Right Reserved </p>
        </Col>
      </Row>
    </footer>
  );
};
