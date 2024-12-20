import { useState, useEffect } from 'react';
import './BackgroundSlider.css';

const images = [
  '/travel-blog-react/img/home-bg-2.jpg',
  '/travel-blog-react/img/home-bg-4.jpg',
  '/travel-blog-react/img/home-bg-5.jpg',
];

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change background image
  const changeBackgroundImage = () => {
    return images[currentIndex];
  };

  // Next image function
  const showNextImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous image function
  const showPrevImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Optionally, auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      showNextImg();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home" id="home">
      <div
        className="home__bg"
        id="home-bg"
        style={{ backgroundImage: `url(${changeBackgroundImage()})` }}
      ></div>
      <div className="home__shadow"></div>
      <div className="home__container container grid">
        <div className="home__data">
          
          <h1 className="home__title">
              Hi, I'm Elena!<br></br>
          </h1>
          <p className="home__description">
            Welcome to my blog!
            {/* I’m so glad you’re here!  */}
          </p>
          <p className="home__description">Let's explore this world together, 
          find the best beaches, 
          <br></br>mysterious islands, and just spend quality time together.
            Feel at home!&#128154;</p>
          {/* <a href="/countries" className="button">
            All Countries <i className="ri-arrow-right-line"></i>
          </a> */}
        </div>
      </div>

      {/* Slider buttons */}
      <button id="prevBtn" className="slider-btn" onClick={showPrevImg}>
        <i className="ri-arrow-left-line"></i>
      </button>
      <button id="nextBtn" className="slider-btn" onClick={showNextImg}>
        <i className="ri-arrow-right-line"></i>
      </button>
    </section>
  );
};

export default BackgroundSlider;