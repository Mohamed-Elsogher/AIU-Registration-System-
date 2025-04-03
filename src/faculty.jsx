import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FacultyInfo.css'; 
import Img1 from './assets/img1.jpg';
import Img2 from './assets/img2.jpeg';
import Img3 from './assets/img3.jpeg';
const FacultyInfo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const facultyImages = [
    Img1,
    Img2,
    Img3,
  ];

  const facultyDescription = `
Alamein International University strives to prepare qualified graduates with high levels of competitiveness in the labour market regionally and globally and committed to professional values and ethics through outstanding educational programs based on theoretical knowledge and practical skills in accordance with international professional standards and quality levels and encourages applied scientific research to meet the needs of society and the environment.  `;

  return (
    <div className="faculty-info">
      <div className="faculty-header">
        <h1>AIU.</h1>
        <p>Alamein International University</p>
        <p>A modern university providing world-class education and research opportunities.</p>
      </div>
      <div className="faculty-content">
        <div className="faculty-slider">
          <Slider {...settings}>
            {facultyImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Faculty Image ${index + 1}`} className="faculty-image" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="faculty-description">
          <h2>Welcome to AIU</h2>
          <p>{facultyDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyInfo;