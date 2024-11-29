import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaGlobeAmericas,
  FaDatabase,
  FaMapMarkedAlt,
} from "react-icons/fa";
import {
  SiLeaflet,
  SiDuckdb,
  SiQgis,
  SiCesium,
  SiArcgis,
  SiPandas,
  SiOpenlayers,
  SiDask,
  SiGoogleearthengine,
  SiScikitlearn,
} from "react-icons/si";
import { GiDeliveryDrone, GiSkateboard } from "react-icons/gi";
import { BiCameraHome, BiLogoPostgresql } from "react-icons/bi";
import { SiGdal } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";

const geospatialSkills = [
  { name: "Google Earth Engine", category: "Data Analysis", icon: <SiGoogleearthengine /> },
  { name: "Lonbaoard", category: "Data Analysis", icon: <GiSkateboard /> },
  { name: "Geemap", category: "Data Visualization", icon: <FaMapMarkedAlt /> },
  { name: "LeafletJS", category: "Data Visualization", icon: <SiLeaflet /> },
  { name: "Leafmap", category: "Data Visualization", icon: <FaMapMarkedAlt /> },
  { name: "Openlayers", category: "Data Visualization", icon: <SiOpenlayers /> },
  { name: "Cesium", category: "Data Visualization", icon: <SiCesium /> },
  { name: "Geoserver", category: "Data Storage", icon: <FaDatabase /> },
  { name: "Geopandas", category: "Data Analysis", icon: <SiPandas /> },
  { name: "GDAL", category: "Data Analysis", icon: <SiGdal  /> },
  { name: "Scikit-learn", category: "Data Analysis", icon: <SiScikitlearn /> },
  { name: "Tensorflow", category: "Data Analysis", icon: <SiTensorflow /> },
  { name: "DuckDB", category: "Data Storage", icon: <SiDuckdb /> },
  { name: "Dask", category: "Data Analysis", icon: <SiDask /> },
  { name: "PostgreSQL/PostGIS", category: "Data Storage", icon: <BiLogoPostgresql /> },
  { name: "3DCityDB", category: "Data Storage", icon: <FaDatabase /> },
  { name: "ArcGIS Pro", category: "Data Analysis", icon: <SiArcgis /> },
  { name: "QGIS", category: "Data Analysis", icon: <SiQgis /> },
  { name: "UAV Technologies ", category: "Data Collection", icon: <GiDeliveryDrone /> },
  { name: "LIDAR Technologies", category: "Data Collection", icon: <FaGlobeAmericas /> },
  { name: "Low-Cost Tech (iPad, RGBD Cameras, 360 Cameras)", category: "Data Collection", icon: <BiCameraHome /> },
];
const GeospatialTechStack = () => {
  const [filter, setFilter] = useState("All");
  // Filter the tech stack based on the selected category
  const filteredSkills = filter === "All" ? geospatialSkills : geospatialSkills.filter(item => item.category === filter);
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button className="custom-button" onClick={() => setFilter("All")}>
          All
        </button>
        <button className="custom-button" onClick={() => setFilter("Data Analysis")}>
          Data Analysis
        </button>
        <button className="custom-button" onClick={() => setFilter("Data Visualization")}>
          Data Visualization
        </button>
        <button className="custom-button" onClick={() => setFilter("Data Storage")}>
          Data Storage
        </button>
        <button className="custom-button" onClick={() => setFilter("Data Collection")}>
          Data Collection
        </button>
      </div>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {filteredSkills.map((tech, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <h5 style={{ textAlign: "center", marginBottom: "10px" }}>{tech.name}</h5>
            {tech.icon}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GeospatialTechStack;
