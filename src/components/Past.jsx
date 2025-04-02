import React from "react";
import "./EducationInEgypt.css"; // Make sure this CSS file exists
import Ph from "../assets/pharaoh-education.jpg";
import AIU from "../assets/alamein-university.png";

const EducationInEgypt = () => {
  const educationData = [
    {
      era: "Education in the Pharaoh Era",
      image: Ph, // Corrected image reference
      description:
        "Education in ancient Egypt was reserved for the elite, focusing on hieroglyphics, mathematics, and religious teachings. Temples served as learning centers, and scribes played a crucial role in preserving knowledge.",
      features: [
        "Hieroglyphic Writing",
        "Religious Studies",
        "Mathematics & Astronomy",
        "Temple-based Learning",
      ],
    },
    {
      era: "Modern Education at AIU",
      image: AIU, // Corrected image reference
      description:
        "Today, education in Egypt has evolved to meet global standards. Alamein International University (AIU) offers advanced research facilities, digital learning, and diverse academic programs to prepare students for the future.",
      features: [
        "Digital Learning Platforms",
        "Advanced Research Facilities",
        "International Standards",
        "Diverse Academic Programs",
      ],
    },
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <h1 className="education-title">Education in Egypt</h1>

        <div className="education-grid">
          {educationData.map((era, index) => (
            <div key={index} className="era-card">
              <div className="image-container">
                <img src={era.image} alt={era.era} className="era-image" />
                <div className="image-overlay"></div>
              </div>

              <div className="era-content">
                <h2 className="era-title">{era.era}</h2>
                <p className="era-description">{era.description}</p>

                <div className="features-container">
                  <h3 className="features-title">Key Features</h3>
                  <ul className="features-list">
                    {era.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationInEgypt;
