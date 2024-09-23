"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  const slideData = [

    {
      id: 2,
      img: "/banner-2.jpeg",
      title: "Best Seller",
      mainTitle: "men's sportswear collection",
      price: "$35",
    },
    {
      id: 3,
      img: "/banner-3.jpeg",
      title: "New Arrival",
      mainTitle: "summer accessories",
      price: "$15",
    },
  ];
  return (
    <div className="">
      <div className="container pt-6 lg:pt-0 ">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
