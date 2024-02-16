import React from "react";
import Testimonials from "../components/Testimonials";

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

      <section className="pt-5">
        <Testimonials />
      </section>

      <section id="learn" className="py-5">
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
                Our team of skilled arborists specialises in tree removal, using
                advanced techniques and equipment to tackle even the most
                challenging tree removal projects. Whether you have a hazardous
                tree threatening your property or simply need to clear space for
                new construction, we have the expertise to get the job done
                safely and effectively.
              </p>
              <p>
                With a focus on safety and environmental responsibility, we
                ensure minimal disruption to your property while prioritising
                the health of surrounding vegetation. Contact us today for
                professional tree removal services you can rely on.
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Learn More About Our
                Tree Removal Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i class="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div className="col-md">
              <img src="img/react.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
