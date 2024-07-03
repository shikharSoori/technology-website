import Image from "next/image";
import React from "react";
import solution from "../../assets/Solution.png";

const TestimonialContent = (testimonial: any) => {
  return (
    <div className="testimonial-item testimonial-item--style_2 row">
      <div className="testimonial-content col-6">
        <p>{testimonial?.description}</p>
        <h5 className="client-name">{testimonial?.name}</h5>
        <h6 className="client-desig">
          {testimonial?.designation}, {testimonial?.designation}
        </h6>
      </div>
      <div
        className="col-6"
        data-wow-duration="1s"
        data-wow-delay=".5s"
      >
        <div className="testimonial-thumb testimonial-thumb--style_2">
          <Image
            src={solution}
            alt="policy banner"
            className="moving-vertical"
            width={583} // Adjust as needed
            height={634} // Adjust as needed
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialContent;
