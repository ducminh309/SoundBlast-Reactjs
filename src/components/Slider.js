import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const GallerySlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("data/Slider.json")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Error load slider:", err));
  }, []);

  return (
    <div style={{paddingTop: 50}}>
    <div className="mt-5 mx-4">
      <Carousel fade interval={3000} pause={false}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt={slide.title}
              style={{ height: "450px", objectFit: "cover", borderRadius: "20px" }}
            />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default GallerySlider;
