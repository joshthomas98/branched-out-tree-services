import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const AboutUs = () => {
  return (
    <>
      <section id="about-section" className="pt-5 pb-5">
        <div className="container wrapabout">
          <div className="red" />
          <div className="row">
            <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
              <div className="blockabout">
                <div className="blockabout-inner text-center text-sm-start">
                  <div className="title-big pb-3 mb-3">
                    <h3>About Us</h3>
                  </div>
                  <p className="description-p text-muted pe-0 pe-lg-0">
                    Welcome to Branched Out Tree Services, founded by Dean
                    Smith. With a passion for arboriculture and a commitment to
                    excellence, we've been serving [your location] and
                    surrounding areas for over a decade, enhancing the health,
                    beauty, and safety of trees and landscapes.
                  </p>
                  <p className="description-p text-muted pe-0 pe-lg-0">
                    <strong>Our Mission</strong>
                    <br />
                    Our mission is simple: to provide exceptional, reliable, and
                    environmentally-conscious tree care services that exceed
                    expectations, fostering long-term relationships built on
                    trust and integrity.
                  </p>
                  <p className="description-p text-muted pe-0 pe-lg-0">
                    <strong>Expertise and Experience</strong>
                    <br />
                    Dean Smith leads our team of skilled professionals with
                    years of hands-on experience and a deep understanding of
                    arboriculture practices, ensuring safe and efficient
                    handling of projects of any size or complexity.
                  </p>
                  <p className="description-p text-muted pe-0 pe-lg-0">
                    <strong>Commitment to Safety and Sustainability</strong>
                    <br />
                    Safety is our top priority. We adhere to the highest
                    industry standards and utilise the latest safety protocols
                    to ensure the well-being of our team, your property, and the
                    environment, promoting sustainability and stewardship of
                    trees for future generations.
                  </p>
                  <p className="description-p text-muted pe-0 pe-lg-0">
                    <strong>Customer Satisfaction Guaranteed</strong>
                    <br />
                    We prioritise communication, reliability, and transparency
                    in every aspect of our service, working closely with clients
                    to address concerns and provide personalised solutions. Your
                    satisfaction is our ultimate goal.
                  </p>

                  <div className="pt-3">
                    <SocialMediaIcons />
                  </div>

                  <a href="#" className="btn rey-btn circular-border">
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <figure className="potoaboutwrap">
                <img
                  className="img-fluid"
                  src="../../images/about-portrait-image.jpeg"
                  alt="potoabout"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
