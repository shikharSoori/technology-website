import AboutHero from "@/components/Hero/AboutHero";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <AboutHero title="404"/>
      <div className="main-content-wrapper section-padding">
        <div className="container">
          <div className="section-bg-color pt-50 pb-50">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>404</h1>
                  <h2>OPPS! PAGE NOT BE FOUND</h2>
                  <p>
                    Sorry but the page you are looking for does not exist, have
                    been removed, name changed or is temporarity unavailable.
                  </p>

                  <Link href="/" className="btn btn-all">
                    Back to Home Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
