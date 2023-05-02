import React, { useState, useEffect } from "react";

const Carousel = ({ images, interval = 3000, transitionTime = 1000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
      setLoading(true);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  useEffect(() => {
    const img = new Image();
    img.src = images[currentImageIndex];
    img.onload = () => {
      setLoading(false);
    };
    img.onerror = () => {
      setLoading(false);
    };
  }, [currentImageIndex, images]);

  const handlePrev = () => {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
    setLoading(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
    setLoading(true);
  };

  const fadeStyles = {
    opacity: loading ? 0 : 1,
    transition: `opacity ${transitionTime / 1000}s ease-in-out`,
  };

  const imageStyles = {
    objectFit: 'contain',

  };

  return (
    <div className="carousel" style={{marginTop:'20px'}}>
      <button className="prev-btn" onClick={handlePrev}>
        &lt;
      </button>
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        style={{ ...fadeStyles, ...imageStyles }}
      />
      <button className="next-btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
