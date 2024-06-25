import HomeHero from "@/components/Hero/HomeHero";
import HomeServices from "@/components/Services/HomeServices";
import Counter from "@/components/Counter/Counter";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhySoori from "@/components/WhySoori/WhySoori";
import Partners from "@/components/Partners/Partners";
import Scroller from "@/components/Scroller/Scroller";
import TrackTraceVideo from "@/components/TrackTraceVideo/TrackTraceVideo";
import Image from "next/image";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import TitleText from "@/components/Testimonials/TitleText";
import bg from "../assets/innovationBg-removebg.png";
import Link from "next/link";
import MotoBanner from "@/components/MotoBanner/MotoBanner";
import Blog from "@/components/Blog/Blog";
// export const revalidate = 3600;
const Home = () => {
  return (
    <>
      <HomeHero />
      <MotoBanner />
      {/* <section className="policy-area pb-125 pt-125">
        <div className="container">
          <div className="row mtn-30">
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon1} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Creative Ideas</h3>
                
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon2} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Low Cost</h3>
                
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon3} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Talented Team</h3>
                
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon4} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Online Support</h3>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <TrackTraceVideo />
      <HomeServices />
      <WhySoori />
      {/* <section className="policy-area pb-125">
        <div className="container">
          <div className="row mtn-30">
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon2} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Low Cost</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon3} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Talented Team</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon4} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Online Support</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Blog />
      <Testimonials />

      <Partners />
      {/* <Counter /> */}

      <Scroller />
    </>
  );
};

export default Home;
