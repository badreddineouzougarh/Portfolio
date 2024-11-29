import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiMacos,
  SiLatex,
} from "react-icons/si";
import { FaDocker, FaGithub } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiMacos />, name: "" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiLatex />, name: "LaTeX" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiJupyter />, name: "Jupyter" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          xs={6}
          md={3}
          key={index}
          className="tech-icons"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
            {tool.icon}
          </div>
          <div style={{ fontSize: "1rem", color: "white" }}>{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
