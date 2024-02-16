import React from "react";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";

const Homepage = () => {
  return (
    <>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-3 text-center text-sm-start">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <h1 className="mx-3">
                Welcome to{" "}
                <span className="text-warning">Branched Out Tree Services</span>
              </h1>
              <p className="lead my-4 mx-3">
                We specialise in expert tree removal services, utilising
                advanced techniques and equipment to safely and efficiently
                remove trees of any size or complexity. Our skilled team is
                committed to delivering top-quality service while prioritising
                safety and environmental responsibility.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid mb-5 px-4"
                src="../../images/bots-hero-image.jpeg"
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 bg-light">
        <Testimonials />
      </section>

      <section
        id="learn"
        className="p-5"
        style={{ backgroundColor: "#ecedf0" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                src="../../images/tree-removal-homepage.jpg"
                className="img-fluid"
                alt="Tree Removal"
              />
            </div>
            <div className="col-md p-5">
              <h2>Expert Tree Removal Services</h2>
              <p className="lead">
                Trust us to safely and efficiently remove trees of any size or
                complexity.
              </p>
              <p>
                At Branched Out Tree Services, tree removal is our speciality.
                With years of experience in the industry, our team of skilled
                arborists is equipped to handle even the most challenging tree
                removal projects. Whether you have a hazardous tree posing a
                threat to your property or simply need to clear space for new
                construction, we have the expertise and equipment to get the job
                done safely and effectively.
              </p>
              <p>
                Our approach to tree removal prioritises safety and
                environmental responsibility. We take every precaution to
                minimise disruption to your property and ensure the health of
                surrounding vegetation. From initial assessment to final
                clean-up, you can trust us to deliver professional tree removal
                services tailored to your specific needs.
              </p>
              <p>
                Contact us today to learn more about how our expert tree removal
                services can help you maintain the beauty and safety of your
                property.
              </p>
              <a href="/services" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Learn More About Our
                Tree Removal Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="p-5 bg-dark text-light">
        <FAQs />
      </section>
    </>
  );
};

export default Homepage;
