import React from "react";

const BlogPage3 = () => {
  const projectData = {
    title: "Digital Twin Project",
    image:"https://media.licdn.com/dms/image/v2/D4E12AQH6HWpURfm1ag/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687042162727?e=1738195200&v=beta&t=zM7vfLCAN_WTjOvQW38YH1Bme-5hTLOPNfo4C-Ok5lQ",
    authors: "Badreddine Ouzouagrh & Hiba Doi",
    intro: `
      This year, the Digital Twin project, showcased at the 23rd edition of the AMETOP 
      Enterprise Forum hosted in Salon IAV, garnered significant attention and acclaim. 
      The presence of the Minister of Agriculture, Maritime Fisheries, Rural Development, 
      and Water and Forests, Mohammed Sadiki, added to the prestige of the event. 
      With the invaluable guidance and support of our esteemed professor, Reda Yaagoubi, 
      our team collaboratively undertook this groundbreaking project. The project seamlessly 
      integrates a virtual model of the topography department with IoT sensors embedded in the physical world. 
      This integration of technologies has opened up new avenues for environmental monitoring, 
      real-time responsiveness, and task automation. In this article, we will delve into 
      the diverse components of the Digital Twin project and explore its potential impact 
      on the planning and management of smart cities.
    `,
    sections: [
      {
        title: "1. Creation of a Physical Model",
        text: `
          This step allows for concrete observation of the effects of interactions between 
          the physical model and the virtual model for experimental purposes.`,
        image: "https://media.licdn.com/dms/image/v2/D4E12AQGM8qm0oVrBhQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1686690323946?e=1738195200&v=beta&t=qF6EMsruHBRqNuN89NCBiN4bVUC9J6Yr_VURkiwvsyo",
      },
      {
        title: "2. IoT Sensors Integration",
        text: `
          Selection and incorporation of IoT sensors, including the DHT11 for temperature and 
          humidity measurements, soil moisture sensors, ultrasonic sensors, leak detection sensors, 
          fire detection sensors, and luminosity sensors. These sensors were paired with Wemos ESP8266 
          WiFi boards to enhance the wireless approach.`,
        image: "https://media.licdn.com/dms/image/v2/D4E12AQGfEs25ByLdaA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1686690414016?e=1738195200&v=beta&t=gyVNpRyCV2dMziPHceJk1Mf7q2vFk07xVGqpt6S0ums",
      },
      {
        title: "3. Connectivity Setup",
        text: `
          Establishing connectivity between the sensors and the virtual model by setting up 
          a Node.js server that connects Arduino IDE and the MongoDB database.`,
        image: "https://media.licdn.com/dms/image/v2/D4E12AQE5DablkL9Z6A/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1686690799783?e=1738195200&v=beta&t=E0HqlgJiFdBgzqtDKSDfg3kRBqzZNd6pAPkrRv1Z-lA",
      },
      {
        title: "4. Virtual Model Creation",
        text: `
          Using the 'Scan to BIM' principle in Revit software. Connecting with the MongoDB database 
          using Dynamo to link changes in parameterized objects in Revit.`,
        image: "https://media.licdn.com/dms/image/v2/D4E12AQFPTnmwgglxCg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1686690952960?e=1738195200&v=beta&t=7DmJJHW7sPDdYFumPPsjJqBzOjBlxqmkqMHPGwJpl9M",
      },
      {
        title: "5. Motors Integration",
        text: `
          Integrating motors with IoT sensors to automate actions like door opening and curtain control 
          based on sensor values.`,
      },
      {
        title: "6. Real-Time Rendering",
        text: `
          Real-time rendering using Enscape and observing the virtual model changes with a VR headset.`,
        image: "https://media.licdn.com/dms/image/v2/D4E12AQHdpAr8jLxsdg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1686691709864?e=1738195200&v=beta&t=zjYpFw95vlsJmeMTEonpx8dPsbZYJPd-efLwtJuSmm8",
        text2: "This approach allows for a complete integration of the different components of the project, combining physical and virtual aspects with action automation, providing an immersive and interactive experience.",
        image: "https://media.licdn.com/dms/image/v2/D4E12AQFL3925CGI3pg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1687167698719?e=1738195200&v=beta&t=ccATHGOq6qUgZ795nd4rx7yX5HdT1Z6hPyKEYXebJaY",

      },
    ],
    credits: [
      {
        label: "Project Leaders",
        names: [
            {
                name: "Badr Ed-Dine Ouzougarh",
                url: "https://www.linkedin.com/in/badr-ed-dine-ouzougarh-6363831b5/",
              },
          {
            name: "Hiba Doi",
            url: "https://www.linkedin.com/in/hiba-doi-1b4bb21b3/",
          },
          
        ],
      },
    ],
  };

  return (
    <div
      className=" text-left text-white project-card"
      style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}
    >
      <h1
        className="home-content heading heading-name"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        {projectData.title}
      </h1>
      <h3
        className="text-left text-white"
        style={{
          textAlign: "center",
          fontSize: "20px",
          marginBottom: "20px",
        }}
      >
        {`Authors: ${projectData.authors}`}
      </h3>

      {/* Conteneur Flexbox pour aligner l'image et l'intro */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        {/* Texte à gauche */}
        <p
          style={{
            flex: 1,
            textAlign: "justify",
            fontSize: "19px",
            marginRight: "20px",
          }}
        >
          {projectData.intro}
        </p>

        {/* Image à droite */}
        <img
          src={projectData.image}
          alt="Project"
          style={{
            flex: 0.5,
            maxWidth: "50%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </div>

      {projectData.sections.map((section, index) => (
        <div
          className="text-left text-white"
          key={index}
          style={{ marginBottom: "20px" }}
        >
          <h2>{section.title}</h2>
          <p>{section.text}</p>
          {section.image && (
            <img
              src={section.image}
              alt={section.title}
              style={{ maxWidth: "40%", height: "auto", borderRadius: "8px" }}
            />
          )}
          <p>{section.text2}</p>
        </div>
      ))}
      <footer style={{ marginTop: "40px" }}>
        {projectData.credits.map((credit, idx) => (
          <div className="text-white" key={idx}>
            <h4>{credit.label}</h4>
            <ul>
              {credit.names.map((person, i) => (
                <li key={i}>
                  <a href={person.url} target="_blank" rel="noopener noreferrer">
                    {person.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </div>
  );
};

export default BlogPage3;