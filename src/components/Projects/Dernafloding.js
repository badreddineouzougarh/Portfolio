import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import classification2 from "../../Assets/Projects/classificationresultas.png";
import intersection from "../../Assets/Projects/intersection.png";
import deeplearning from "../../Assets/Projects/deeplearning.png";
import gee from "../../Assets/Projects/gee.png";

function PostDisasterProject() {
  return (
    <Container fluid className="project-section text-white">
      <Row>
        <Col>
          <h1 className="project-heading">
            <strong className="purple">
              Using Advanced GIS Techniques for Post-Disaster Resource Assessment in Derna
            </strong>
          </h1>
         
          <p style={{ textAlign: "justify ", }}>
            On the night of Sunday, September 10, to Monday, September 11, 2023, <strong>Storm Daniel</strong> struck Derna, 
            a city of 100,000 inhabitants in eastern Libya. The catastrophic storm caused the collapse of two upstream dams, 
            unleashing a flood of tsunami-like proportions along the wadi that runs through the city. Three days after the disaster, 
            the first satellite images of the area began to emerge, revealing the extent of the devastation.
          </p>
          <p style={{ textAlign: "justify" }}>
            Thousands of lives were lost, and countless resources were submerged, making their assessment and inventory particularly 
            challenging in this dire situation. This project leverages advanced <strong>Geographic Information System (GIS)</strong> techniques 
            to address these challenges by using multisource data, such as high-resolution <strong>RGB drone imagery</strong> and 
            <strong>multispectral satellite images</strong>. These datasets serve as inputs for predictive models powered by 
            <strong>artificial intelligence (AI)</strong>, including <strong>machine learning</strong> and <strong>deep learning algorithms</strong>.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <img
            src={gee}
            alt="Image of the area after the flood"
            style={{ width: "60%", marginTop: "20px", borderRadius: "8px" }}
          />
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            <em>Figure 1: Image of the area after the flood.</em>
          </p>
        </Col>
        <Col xs={12} md={6}>
          <h2 className="project-subheading">
            <strong className="purple">Key Methods and Techniques</strong>
          </h2>
          <ul>
            <li>
              <strong>Pixel-Based Classification in QGIS:</strong> Sentinel satellite imagery is classified using a pixel-based approach, employing the minimum distance algorithm for accuracy.
            </li>
            <li>
              <strong>Pixel-Based Classification in SNAP:</strong> Similar pixel-based classification is performed using the SNAP software developed by the European Space Agency (ESA).
            </li>
            <li>
              <strong>Object-Based Image Analysis (OBIA):</strong> An object-based approach is implemented in QGIS using the K-Nearest Neighbors (KNN) method to enhance classification results.
            </li>
            <li>
              <strong>MLP Model-Based Classification:</strong> A deep learning Multi-Layer Perceptron (MLP) model is used for further refining the classification.
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            These methods integrate advanced GIS tools to provide accurate, up-to-date visual data that supports decision-making, 
            rescue planning, resource allocation, and public awareness during disasters.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="project-subheading">
            <strong className="purple">Results: Image Classification</strong>
          </h2>
          <Row>
            <Col xs={12} md={6}>
              <img
                src={classification2}
                alt="Classification result before improvements"
                style={{ width: "100%", marginTop: "20px", borderRadius: "8px" }}
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <em>Figure 2: Classification result using QGIS and Google Earth Engine.</em>
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={deeplearning}
                alt="Classification result after improvements"
                style={{ width: "100%", marginTop: "20px", borderRadius: "8px" }}
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <em>Figure 3: Classification result after using deep learning (MLP model).</em>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="project-subheading">
            <strong className="purple">Building Damage Assessment</strong>
          </h2>
          <p style={{ textAlign: "justify" }}>
            To assess the damage, especially to buildings submerged in water, building footprint data was extracted from 
            <strong>OpenStreetMap (OSM)</strong> and intersected with classified satellite imagery. By filtering based on class 
            attributes (mean values), we identified <strong>2,971 buildings</strong> affected by flooding. This process demonstrates 
            the utility of combining open-source data and advanced GIS methods for disaster assessment.
          </p>
          <img
            src={intersection}
            alt="Building damage results"
            style={{ width: "50%", marginTop: "40px", borderRadius: "8px" }}
          />
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            <em>Figure 4: Buildings identified as affected by the flood.</em>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDisasterProject;
