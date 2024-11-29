import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiNodejs, DiReact,  DiPython, DiJava } from "react-icons/di";
import {  SiStreamlit, SiNextdotjs, SiFlask,  SiPostgresql } from "react-icons/si";

const techData = [
  { name: "Flask", icon: <SiFlask />, category: "Backend" },
  { name: "C++", icon: <CgCPlusPlus />, category: "Programming Languages" },
  { name: "JavaScript", icon: <DiJavascript1 />, category: "Programming Languages" },
  { name: "Node.js", icon: <DiNodejs />, category: "Backend" },
  { name: "React", icon: <DiReact />, category: "Frontend" },
  { name: "Streamlit", icon: <SiStreamlit />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Databases" },
  { name: "Python", icon: <DiPython />, category: "Programming Languages" },

  { name: "Java", icon: <DiJava />, category: "Programming Languages" },
];

function Techstack() {
  const [filter, setFilter] = useState("All");

  // Filter techData based on the selected category
  const filteredTech = filter === "All" ? techData : techData.filter(item => item.category === filter);

  return (
    <div>
      {/* Filter Buttons */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button className="custom-button"  onClick={() => setFilter("All")}>
          All
        </button >{" "}
        <button className="custom-button"  onClick={() => setFilter("Programming Languages")}>
          Programming Languages
        </button >{" "}
        <button className="custom-button"  onClick={() => setFilter("Databases")}>
          Databases
        </button >{" "}
        <button className="custom-button"  onClick={() => setFilter("Backend")}>
          Backend
        </button >{" "}
        <button className="custom-button"  onClick={() => setFilter("Frontend")}>
          Frontend
        </button >{" "}
        <button className="custom-button"  onClick={() => setFilter("Other")}>
          Other
        </button >
      </div>

      {/* Tech Stack Display */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {filteredTech.map((tech, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <h5 style={{ textAlign: "center", marginBottom: "10px" }}>{tech.name}</h5>
            {tech.icon}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
