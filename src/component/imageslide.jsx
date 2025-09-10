import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pro4 from "../assets/pro4.jpg"
import pro7 from "../assets/pro7.jpg";
import pro8 from "../assets/pro8.jpg";
import pro9 from "../assets/pro9.jpg";
import pro10 from "../assets/pro10.jpg";
import pro11 from "../assets/pro11.jpg";
import pro13 from "../assets/pro35.jpg";

// Custom Prev Arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-white cursor-pointer z-10"
    >
     
    </div>
  );
};

// Custom Next Arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-white cursor-pointer z-10"
    >
      
    </div>
  );
};

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const images = [pro7, pro8, pro9, pro10,pro11];

  return (
    <div className="max-w-3xl w-full mx-auto mt-10 px-4 relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[300px] object-cover rounded-2xl shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
