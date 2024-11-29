import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import GeospatialTechStack from "./GeospatialTech";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Col
            md={6}
            style={{
              textAlign: "left",
              padding: "20px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "20px",
            }}
          >
            <div
              style={{
                width: "500px", // Set fixed wrapper width
                height: "500px", // Set fixed wrapper height
                overflow: "hidden",
              }}
            >
              <video
                src="https://storage.googleapis.com/baderouz/video_presentation.mov"
                width="100%" // Fit the video to the wrapper width
                height="100%" // Fit the video to the wrapper height
                controls // Add playback controls
                preload="auto" // Preload video for faster playback
              />
            </div>
          </Col>
        </Row>
        <h1 className="project-heading">
          Programming <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">My Geospatial</strong> Kit
        </h1>
        <GeospatialTechStack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
