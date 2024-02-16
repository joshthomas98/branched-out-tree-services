import React from "react";

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="px-5 pb-5">
        <div className="container">
          <h2 className="text-center">Testimonials</h2>
          <p className="lead text-center mb-5">
            See what our customers have to say about Branched Out Tree
            Services...
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Samantha</h3>
                  <p className="card-text">
                    "I appreciate the excellent care Branched Out Tree Services
                    provided for my trees. Their team ensured the health and
                    beauty of every tree they worked on." — Samantha
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Michael</h3>
                  <p className="card-text">
                    "I'm impressed with the professionalism of Branched Out Tree
                    Services. They handled the tree removal process with
                    expertise and left my property clean and tidy." — Michael
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Emily</h3>
                  <p className="card-text">
                    "The team at Branched Out Tree Services exceeded my
                    expectations! They handled every task with professionalism
                    and skill. Highly recommend their services." — Emily
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Jason</h3>
                  <p className="card-text">
                    "Great work by Branched Out Tree Services. Their attention
                    to detail and commitment to customer satisfaction make them
                    my go-to choice for all tree care needs." — Jason
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
