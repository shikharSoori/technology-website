"use client"; // Error components must be Client Components

import AboutHero from "@/components/Hero/AboutHero";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div>
    <AboutHero title="Something went Wrong" />
    <div className="main-content-wrapper section-padding">
      <div className="container">
        <div className="section-bg-color pt-50 pb-50">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 text-center">
              <div className="error">
                <h1>OOPs</h1>
                <h2>Something Went Wrong</h2>
                <p>
                  Sorry but the page you are looking for is facing problem, have
                  been removed, name changed or is temporarity unavailable.
                </p>

               
                <button className="btn btn-all" onClick={()=>refreshPage()}>
                  Reload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
