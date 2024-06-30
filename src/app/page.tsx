import HomeHero from "@/components/Hero/HomeHero";
import HomeServices from "@/components/Services/HomeServices";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhySoori from "@/components/WhySoori/WhySoori";
import Partners from "@/components/Partners/Partners";
import Scroller from "@/components/Scroller/Scroller";
import TrackTraceVideo from "@/components/TrackTraceVideo/TrackTraceVideo";
import MotoBanner from "@/components/MotoBanner/MotoBanner";
import Blog from "@/components/Blog/Blog";
// export const revalidate = 3600;
const Home = () => {
  return (
    <>
      <HomeHero />
      <MotoBanner />
      
      <TrackTraceVideo />
      <HomeServices />
      <WhySoori />

      <Blog />
      <Testimonials />

      <Partners />

      <Scroller />
    </>
  );
};

export default Home;
