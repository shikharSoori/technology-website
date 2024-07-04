import Slider from "@/components/Carousel/Carousel";
import { getData } from "@/app/lib/getData";
import TitleText from "./TitleText";
import Link from "next/link";
import clientsData from "@/utils/Home.json";
import "@/components/Services/services.css";
const Testimonials = async () => {
  var testimonialSlider = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    autoplayspeed: 1000,
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
          slidesToShow: 1,
        },
      },
    ],
  };

  const data = await getData("about-us-app/ceo-message");

  const testimonials = clientsData.clientsReview;

  return (
    <section className="testimonial-wrapper testimonial-wrapper--style_2 gray-bg section-padding fix">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-12 d-flex justify-content-center"
            style={{ fontSize: "14px" }}
          >
            <div className="section-title mb-4">
              <h2 className="h1 title text-center">
                <TitleText
                  title={`
              Client’s <span data-aos="fade-right" data-aos-duration="2000" data-aos-delay="5000">Success</span> Stories  `}
                />
              </h2>
            </div>
          </div>
          <div
            className="col-12 order-1 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            <div className="feature_slider_inner mt-0">
              <Slider {...testimonialSlider}>
                {testimonials?.map((testimonial: any, i: number) => {
                  const maxLength = 100;
                  const { id, image, name, description } = testimonial;
                  console.log(image);
                  return (
                    <div
                      key={i + 1}
                      className="item "
                      data-aos="fade-right"
                      data-aos-delay={`${900}`}
                      data-aos-easing="ease-in-sine"
                    >
                      <div
                        className="home-services-card"
                        style={{
                          background: `linear-gradient(0deg, rgba(0, 56, 102, 0.78) 0%, rgba(0, 0, 0, 0) 45.5%), url(${image}) center / cover no-repeat`,
                        }}
                      >
                        <Link href="#">
                          <h4>{name}</h4>
                        </Link>
                        <p>
                          {description.length >= maxLength
                            ? `${description.substr(0, maxLength).trim()}...`
                            : description}
                        </p>
                        <Link href={`/clients/${id}`} className=" know-more ">
                          Know More
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </Slider>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
