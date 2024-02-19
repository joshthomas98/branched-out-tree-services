import React, { useEffect } from "react";

const BookQuote = () => {
  useEffect(() => {
    // Inject Calendly widget script directly into the DOM
    const script = document.createElement("script");
    script.innerHTML = `
      (function () {
        var e = document.createElement("script");
        e.type = "text/javascript", e.async = !0, e.src = "https://assets.calendly.com/assets/external/widget.js";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
      })();
    `;
    document.body.appendChild(script);

    // Cleanup function to remove the script tag when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="section bg-theme-color-light overlay-dark overlay-opacity-8 bg-cover lazy px-3 py-md-5 py-sm-4"
        data-loaded="true"
        style={{
          backgroundImage: "url(https://bootdey.com/img/Content/bg1.jpg)",
        }}
      >
        <div className="container">
          <div className="row text-center-md text-center-xs d-middle justify-content-start">
            <div
              className="col-12 col-lg-6 mb-5 text-white aos-init aos-animate"
              data-aos="fade-in"
              data-aos-delay={0}
              data-aos-offset={0}
            >
              {/* main title */}
              <h1 className="display-4 fw-bold mb-0 px-5">
                <span className="d-inline-block">
                  <span className="h6 fw-normal d-block text-align-end text-center-xs pt-sm-4 pt-md-0">
                    Interested in our tree services?
                  </span>
                  Book Your <br />
                  <span className="text-danger">Free Quote</span> <br />
                  Callout Today
                </span>
              </h1>

              {/* slogan */}
              <p className="h3 fw-normal mb-0 px-5">
                Your quote is one click away
              </p>
            </div>
            <div
              className="col-12 col-lg-6 text-center-md text-center-xs aos-init aos-animate pb-sm-4 px-sm-4 pb-md-0"
              data-aos="fade-in"
              data-aos-delay={50}
              data-aos-offset={0}
              style={{ paddingRight: "5%" }}
            >
              <div
                className="calendly-inline-widget"
                style={{ minWidth: "320px", height: "100vh" }}
                data-url="https://calendly.com/joshua-thomas98/free-quote-callout"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookQuote;
