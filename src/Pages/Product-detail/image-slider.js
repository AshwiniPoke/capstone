import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({data}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
      <img src={data.image} className="sliderImg" alt="sliderImg"/>
      </div>
      <div>
      <img src={data.image} className="sliderImg" alt="sliderImg"/>
      </div>
      <div>
      <img src={data.image} className="sliderImg" alt="sliderImg"/>
      </div>
      <div>
      <img src={data.image} className="sliderImg" alt="sliderImg"/>
      </div>
      <div>
      <img src={data.image} className="sliderImg" alt="sliderImg"/>
      </div>
      
    </Slider>
  );
}