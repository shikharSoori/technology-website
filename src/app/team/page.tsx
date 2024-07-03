import React from "react";
import Slider from "@/components/Carousel/Carousel";
import AboutHero from "@/components/Hero/AboutHero";
import Image from "next/image";
import solution from "../../assets/Solution.png";
import TeamMember from "@/components/Team/TeamMember";

const Team = () => {
  var teamSlider = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 500,
  };
  return (
    <div>
      <AboutHero title={"Team"} />
      <section className="team-wrapper team-wrapper--style_3 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-4 text-center">
                <h2 className="h1 title">Our Creative Team</h2>
                <p>
                  labore dolore magnam aliquam quaerat voluptatem ad minima
                  veniam, quis nostrum exercitationem
                </p>
              </div>
            </div>
          </div>
          <div className="team-member-inner">
            <Slider {...teamSlider} className="team-slider">
              <TeamMember />
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
