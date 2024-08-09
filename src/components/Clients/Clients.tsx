import Image from "next/image";
import React from "react";

import Slider from "@/components/Carousel/Carousel";
import zebraImg from "../../assets/zebra.png";
import wacomImg from "../../assets/wacom.png";
import hidImg from "../../assets/hid.png";
import { getData } from "@/app/lib/getData";
import Link from "next/link";
const Clients = async () => {
  var brandSlider = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const clients = [
    "https://i.ibb.co/SJkqTFj/Whats-App-Image-2024-08-04-at-10-35-54.jpg",
    "https://i.ibb.co/C7bZ5nk/Whats-App-Image-2024-08-04-at-10-36-05.jpg",
    "https://i.ibb.co/0YGmf8Z/Whats-App-Image-2024-08-04-at-10-36-16.jpg",
    "https://i.ibb.co/FYPVnWj/Whats-App-Image-2024-08-04-at-10-36-26.jpg",
    "https://i.ibb.co/gSwKNBC/Whats-App-Image-2024-08-04-at-10-36-36.jpg",
    "https://i.ibb.co/VtdH8QV/Whats-App-Image-2024-08-04-at-10-36-51.jpg",
    "https://i.ibb.co/SNwHBVX/Whats-App-Image-2024-08-04-at-10-39-15.jpg",
    "https://i.ibb.co/c3h7Ty0/Whats-App-Image-2024-08-04-at-10-44-33.jpg",
    "https://i.ibb.co/27wscjP/Whats-App-Image-2024-08-04-at-10-50-07.jpg",
    "https://i.ibb.co/f01fJXJ/Whats-App-Image-2024-08-04-at-10-51-29.jpg",
  ];
  return (
    <section
      className="brand-logo-wrapper py-3 fix wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="sr-only">brand logo</h2>

            <Slider {...brandSlider}>
              {clients?.map((member: any) => {
                return (
                  <div key={member} className="brand-item h-100">
                    <Image
                      src={member}
                      alt="policy banner"
                      width={200} // Adjust as needed
                      height={1.33} // Adjust as needed
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
