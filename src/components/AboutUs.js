import React from 'react';
import '../AboutUs.css';
import AboutImage from '../assets/about1.jpg';

function AboutUs() {
  return (
    <section id="about" className="about-us">
      <div className="about-us-content">
        <h2>About Ranjith Ceramics</h2>
        <p>
          Located in the heart of India, Ranjith Ceramics has been a trusted name in quality ceramics for over two decades. Our extensive range of tiles, marbles, and bathtubs meets the highest standards of craftsmanship, ensuring every product is as durable as it is beautiful.
        </p>
        <p>
          As we expand into the online market, our goal is to bring premium ceramics to homes and businesses across India. Explore our legacy of excellence and see how Ranjith Ceramics can transform your spaces.
        </p>
        <p>
          With a foundation of customer satisfaction and commitment to quality, our collection embodies beauty and timeless appeal. Discover how Ranjith Ceramics can shape elegant, enduring spaces across India.
        </p>
      </div>
      <div className="about-us-image">
        <img src={AboutImage} alt="Ranjith Ceramics Showroom" />
      </div>
    </section>
  );
}

export default AboutUs;

