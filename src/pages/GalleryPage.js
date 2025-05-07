import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("/data/gallery.json")
      .then(res => setImages(res.data))
      .catch(err => console.error("Error loading gallery", err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={`http://localhost:3000/${img.image}`}
              alt={`gallery-${index}`}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default GalleryPage;
