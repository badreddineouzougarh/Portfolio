import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DT from "../../Assets/Projects/DT.png";
import aalto from "../../Assets/Projects/aalto.jpg";
import drone1 from "../../Assets/Projects/drone1.png";
import dushbin from "../../Assets/Projects/dushbin.png";
import DTb from "../../Assets/Projects/DTb.png";
import Derna from "../../Assets/Projects/Derna.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Outside classroom university experiences 😁.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DT}
              isBlog={false}
              title="GreenTwincity"
              description=" Part of my thesis work at TOP lab developing an open-source workflow for creating an Urban Digital Twin of   the Green city of Benguerir. The research aims to provide a comprehensive urban model that accurately reflects the city’s current state, utilizing a data-rich and information-driven approach"
              ghLink="https://github.com/badreddineouzougarh/GreenTwinCity.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aalto}
              isBlog={false}
              title="Construction Digital Twin"
              description="Part of my research work during the ASCI Summer Research Program, focused on Digital Twin technology for construction management. This involved creating an analytical dashboard to analyze equipment and workers' indoor positioning data in real-time within a construction site. The project also included simulating the construction site using an agent-based modeling system and analyzing site status in real-time."
              ghLink="https://github.com/badreddineouzougarh/Icons_System.git"

              getmoreLink="https://github.com/badreddineouzougarh/Icons_System.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dushbin}
              isBlog={false}
              title="Smart Waste Collection"
              description="An IoT-based solution designed to optimize waste collection in cities by integrating real-time monitoring, route optimization, and predictive analysis. Using IoT sensors and the OGC SensorThings API, the system tracks container fill levels, sends alerts to waste collectors, and enables efficient resource allocation. It also employs a deep learning model to predict bin fill levels, ensuring timely intervention and reducing environmental hazards caused by overflowing bins."
              ghLink="https://github.com/badreddineouzougarh/SmartWast_IoTsystems.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DTb}
              isBlog={false}
              title=" Smartopo Digital twin "
              description="My first experience in a Digital Twin environment began with our college department buildings. This involved scanning and creating a 3D semantic model to develop an accurate Building Information Model (BIM) integrated with real-time data. The resulting Digital Twin supports various applications, such as building monitoring and simulations, including fire safety simulations"
              getmoreLink="Projects/Dronetop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drone1}
              isBlog={false}
              title="DroneTOp project"
              description="
As a Geomatics student, UAVs (Unmanned Aerial Vehicles) often serve as essential data collection platforms, bridging the gap between theoretical study and practical application. In this project, we aim to develop a prototype quadcopter drone tailored to our academic and research needs, such as detecting and analyzing urban trees. "
              getmoreLink="https://storage.googleapis.com/baderouz/Dossier%20du%20SRAT.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Derna}
              isBlog={false}
              title="Derna Flooding Assesment"
              description="This project focuses on post-disaster resource assessment in Derna, Libya, following the catastrophic flooding caused by Storm Daniel in September 2023. The disaster resulted in extensive damage, including the loss of thousands of lives and the submersion of critical infrastructure and resources. To address the challenges of resource assessment in such a crisis, the project leverages advanced  image processing techniques for instance ML/DL. "
              getmoreLink="Projects/Dernafloding"
            />
          </Col>
        </Row>
      </Container>
      <Container className="text-left" >
      <h1 className="project-heading">
          My Recent <strong className="purple">Publications</strong>
        </h1>
        <></>
        <h3 className="text-white" style={{ textAlign: "left", }}>
          Master Thesis:
        </h3>
        <li className="text-white" style={{ textAlign: "left", }}>
        <p style={{ color: "white" }}>
        GreenTwinCity: An Urban Digital Twin of The Green City of Benguerir,
        available via this link:{" "}
        <a
          href="https://storage.googleapis.com/baderouz/Master_thesis.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "lightblue", textDecoration: "underline",position: "relative",
            zIndex: 10,}}
          
        >
          Open PDF
        </a>
      </p>
        </li>
        <h3 className="text-white text-left" style={{ textAlign: "left", marginBottom: "20px" }}>
          Conference Papers:      
        </h3>
        <li className="text-white" style={{ textAlign: "left", marginBottom: "20px" }}>
        O. e. a. Rached, “3d indoor modeling with low-cost rgb-d camera and ipad pro: A comparative study,”
        ISPRS, 2024.          <a
            href="https://storage.googleapis.com/baderouz/artilce%26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "lightblue", textDecoration: "underline",position: "relative",
              zIndex: 10,}}
            
          >
            open pdf
          </a>

        </li>
        <li className="text-white" style={{ textAlign: "left", marginBottom: "20px" }}>
        Coming Soon...😉        
        </li>
        <h3 className="text-white"style={{ textAlign: "left", marginBottom: "20px" }}>
          Journal Papers:
    
        </h3>
        <li className="text-white" style={{ textAlign: "left", marginBottom: "20px" }}>
        Coming Soon...😉        
        </li>
        
      
      </Container>
    </Container>
  );
}

export default Projects;
