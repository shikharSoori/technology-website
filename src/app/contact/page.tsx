"use client";
import React, { FormEvent, useRef, useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact-app/contact`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13948.725024056099!2d85.33037608899774!3d27.71013833247129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d222dcb429%3A0x5855eefca61e407!2sSoori%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1714021297662!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
      <div className="contact-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="contact-message">
                <h2 className="h1 title contact-title">Tell Us Your Project</h2>
                <form
                  id="contact-form"
                  className="contact-form"
                  onSubmit={onSubmit}
                  ref={formRef}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input
                        name="name"
                        placeholder="Name *"
                        type="text"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input
                        name="contactNo"
                        placeholder="Phone *"
                        type="text"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input
                        name="email"
                        placeholder="Email *"
                        type="text"
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input
                        name="address"
                        placeholder="Address *"
                        type="text"
                      />
                    </div>
                    <div className="col-12">
                      <div className="contact2-textarea text-center">
                        <textarea
                          placeholder="Message *"
                          name="message"
                          className="form-control2"
                          required
                        ></textarea>
                      </div>
                      <div className="contact-btn">
                        <button
                          className="btn btn-all"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? "Loading..." : "Send Contact"}
                        </button>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <p className="form-messege"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="contact-information">
                <h2 className="h1 title contact-title">Contact Us</h2>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum claram anteposuerit
                  litterarum formas human.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-fax"></i> Address : No 40 Baria Sreet
                    133/2 NewYork City
                  </li>
                  <li>
                    <i className="fa fa-envelope-o"></i> E-mail:
                    info@yourdomain.com
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> +88013245657
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
