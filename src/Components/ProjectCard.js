import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <Link path={projUrl} target="_blank">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </Link>
      </div>
    </Col>
  );
};
