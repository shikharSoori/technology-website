import Image from "next/image";
import React from "react";

import Slider from "@/components/Carousel/Carousel";
import zebraImg from "../../assets/zebra.png";
import wacomImg from "../../assets/wacom.png";
import hidImg from "../../assets/hid.png";
import { getData } from "@/app/lib/getData";
import Link from "next/link";
const Partners = async () => {
  var brandSlider = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
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
  const data = await getData(`product-app/our-partner`);
  const partners = data?.results;
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
              {partners?.map((member: any) => {
                return (
                  <div key={member.id} className="brand-item h-100">
                    <Link href="" style={{ height: "100%" }}>
                      <Image
                        src={member.image}
                        alt="policy banner"
                        width={150} // Adjust as needed
                        height={100} // Adjust as needed
                      />
                    </Link>
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

export default Partners;
