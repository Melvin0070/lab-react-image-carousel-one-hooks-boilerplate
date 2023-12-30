import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [image, setImage] = useState(0);

  const handleLeftArrow = () => {
    if (image > 0) {
      setImage(image - 1);
    }
  };

  const handleRightArrow = () => {
    if (image < images.length - 1) {
      setImage(image + 1);
    }
  };



  return (
    <div className="main_container">
      <div className="image">
        <div className="arrow left" onClick={handleLeftArrow}><ArrowBackIosIcon /></div>
        <h1 className="title">{images[image].title}</h1>
        <img 
        src={images[image].img} alt=''
        />
        <h3 className="text">{images[image].subtitle}</h3>
        <div className="arrow right" onClick={handleRightArrow}><ArrowForwardIosIcon /></div>
      </div>
    </div>
  );
}

export default Carousel;