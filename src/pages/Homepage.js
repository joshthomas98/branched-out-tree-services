import React from "react";

const Homepage = () => {
  return (
    <>
      <section class="bg-dark text-light p-5 p-lg-0 pt-lg-3 text-center text-sm-start">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-7">
              <h1 class="mx-3">
                Welcome to{" "}
                <span class="text-warning">Branched Out Tree Services</span>
              </h1>
              <p class="lead my-4 mx-3">
                We specialise in expert tree removal services, utilising
                advanced techniques and equipment to safely and efficiently
                remove trees of any size or complexity. Our skilled team is
                committed to delivering top-quality service while prioritising
                safety and environmental responsibility.
              </p>
            </div>
            <div class="col-md-5">
              <img
                class="img-fluid mb-5 px-4"
                src="../../images/bots-hero-image.jpeg"
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="p-5">
        <div class="container">
          <div class="row text-center g-4">
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-laptop"></i>
                  </div>
                  <h3 class="card-title mb-3">Virtual</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-secondary text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-person-square"></i>
                  </div>
                  <h3 class="card-title mb-3">Hybrid</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-people"></i>
                  </div>
                  <h3 class="card-title mb-3">In Person</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" class="p-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img src="img/fundamentals.svg" class="img-fluid" alt="" />
            </div>
            <div class="col-md p-5">
              <h2>Learn The Fundamentals</h2>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <a href="#" class="btn btn-light mt-3">
                <i class="bi bi-chevron-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" class="p-5 bg-dark text-light">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h2>Learn React</h2>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <a href="#" class="btn btn-light mt-3">
                <i class="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div class="col-md">
              <img src="img/react.svg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
