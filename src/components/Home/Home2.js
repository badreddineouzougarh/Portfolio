import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with research, and every project has been an opportunity to grow and learn—sometimes in unexpected ways  🤷‍♂️.
              <br />
              <br />I’m fluent in the classics, like 
              <i>
                <b className="purple"> Python and Javascript . </b>
              </i>
              which form the foundation of my work.
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">urban data science, 3D modeling of Urban Features</b> and
                also in areas related to&nbsp;
                <b className="purple">IoT data integration.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing Geoportal and User Interfaces
              with <b className="purple">Python and JS</b> 
              <i>
                <b className="purple">
                  {" "}
                 Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Next.js </b>
                and <b className="purple"> Streamlit.</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/badreddineouzougarh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/badr-ed-dine-ouzougarh-6363831b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="ouzougarhbadred-dine@iav.ac.ma"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMailBulk  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
