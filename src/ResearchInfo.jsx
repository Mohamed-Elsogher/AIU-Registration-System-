import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ResearchInfo.css';
import Img from './assets/research.jpg'

const ResearchInfo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const researchImages = [
    Img,
    Img,
    Img,
  ];

  const researchDescription = `
    At Alamein International University (AIU), we are committed to advancing knowledge through cutting-edge research. Our research spans various disciplines including Computer Science, Engineering, Health Sciences, and Environmental Studies. Our faculty and students engage in projects that address global challenges, fostering innovation and collaboration.
  `;

  return (
    <div className="research-info">
      <div className="research-header">
        <h1>AIU.</h1>
        <p>Alamein International University</p>
        <p>A modern university providing world-class education and research opportunities.</p>
      </div>
      <div className="research-content">
        <div className="research-slider">
          <Slider {...settings}>
            {researchImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Research Image ${index + 1}`} className="research-image" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="research-description">
          <h2>Our Research</h2>
          <p>{researchDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchInfo;