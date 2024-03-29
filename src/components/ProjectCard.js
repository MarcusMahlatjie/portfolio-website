import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <h4>{title}</h4>
      <a id="ancorTag" href={href} target="_blank" >
      <div className="proj-imgbx">
        <img className="pics" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        
      </div>
      </a>
    </Col>
  )
}
