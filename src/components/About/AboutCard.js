import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi Everyone, I am <span className="purple">Badreddine Ouzouagrh </span>
            from <span className="purple"> Rabat, Morocco.</span>
            <br />
            I am currently a recent graduate as a Geomatics Engineer.
            <br />
            I have completed an engineering degree equivalent to an MSc in Geomatics Sciences and Surveying.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking, especially pastry
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>
          My motivation for pursuing science is best captured by Nikola Tesla's timeless words: 
          <p style={{ color: "#A6AEBF" }}>
            "A new idea must not be judged by its immediate results."{" "}
          </p>
          <footer className="blockquote-footer">Nikola Tesla</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
