import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
<link rel="stylesheet" href="./src/CSS/crouselCustomCss.css" />
import SimpleImageSlider from "react-simple-image-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AlDentePro() {

    const images = [
        {
            img:"https://apphousekitchen.com/wp-content/uploads/2024/03/Screenshot-2024-03-25-at-15.03.21-629x1024.png",
        },
        {
            img:"https://apphousekitchen.com/wp-content/uploads/2024/03/Screenshot-2024-03-25-at-15.08.37-629x1024.png",
        },
        {
            img:"https://apphousekitchen.com/wp-content/uploads/2024/03/Screenshot-2024-03-25-at-15.02.59-629x1024.png",
        },
        {
            img:"https://apphousekitchen.com/wp-content/uploads/2024/03/Screenshot-2024-03-25-at-15.08.23-629x1024.png",
        },
        {
            img:"https://apphousekitchen.com/wp-content/uploads/2024/03/Screenshot-2024-03-25-at-15.02.36-629x1024.png",
        },
    ]

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow className={`bg-black`} />,
    prevArrow: <Arrow />,
  };

  return (
    <>



<div className=" w-full px-12 m-auto ">


<Slider {...settings}>
          {images.map((d) => (
            <div className=" m-4 h-[1024px] w-[629px] ">
              <div className=" mx-3 ">
                <img src={d.img} alt="" />
              </div>
            </div>
          ))}
        </Slider>
        </div>

    </>
  )
}

export default AlDentePro