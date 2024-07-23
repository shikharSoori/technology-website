import HomeHero from "@/components/Hero/HomeHero";
import HomeServices from "@/components/Services/HomeServices";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhySoori from "@/components/WhySoori/WhySoori";
import Partners from "@/components/Partners/Partners";
import Scroller from "@/components/Scroller/Scroller";
import TrackTraceVideo from "@/components/TrackTraceVideo/TrackTraceVideo";
import MotoBanner from "@/components/MotoBanner/MotoBanner";
import Blog from "@/components/Blog/Blog";
import Image from "next/image";
import RfidBanner from "@/assets/BANNERRR.png";
import Link from "next/link";
import TitleText from "@/components/Testimonials/TitleText";
// export const revalidate = 3600;
const Home = () => {
  return (
    <>
      <HomeHero />
      <MotoBanner />
      <TrackTraceVideo />
      <HomeServices />
      <Link href="/solutions/trackline">
        <div
          className=" rfid-trackline-banner w-100"
          style={{
            backgroundImage: `url(${RfidBanner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTop: " 1px solid #e7e7e7e",
          }}
        >
          <div className="h-100 container section-padding text-right">
            <h3 className="h1 title" style={{ fontSize: "70px" }}>
              <TitleText
                title={`Build <span> Faster</span> <br/>Automation <br/>  `}
              />
              with <span style={{ fontSize: "70px" }}> RFID</span>
            </h3>
            <Link href="/solutions/trackline" className="btn btn-all mt-4">
              Read More
            </Link>
          </div>
        </div>
      </Link>
      <WhySoori />
      {/* <Image
          className="w-100 rfid-banner-home"
          src={RfidBanner}
          style={{
            objectFit: "cover",
            height: "400px",
            objectPosition: "center",
            cursor: "pointer",
          }}
          alt="banner"
          width={1000}
          height={200}
        /> */}

      <Blog />
      <Testimonials />
      <Partners />
      <Scroller />
    </>
  );
};

export default Home;
