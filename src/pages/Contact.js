import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_c1k2va8", "template_66mn5h7", formRef.current, {
        publicKey: "WkMyr6_WE6UXCu5JN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/thankyouforemail");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container bootstrap snippets bootdeys py-5">
      <div className="row text-center">
        <div className="col-sm-12 col-md-4">
          <div className="contact-detail-box">
            <i className="fa fa-th fa-3x text-primary" />
            <h4 className="pt-2">Get In Touch</h4>
            <abbr title="Phone">P:</abbr> 07593218920
            <br />
            E:{" "}
            <a
              href="mailto:joshua.thomas98@hotmail.co.uk"
              className="text-muted"
            >
              jobdone@live.com
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="contact-detail-box">
            <i className="fa fa-map-marker fa-3x text-primary" />
            <h4 className="pt-2">Our Location</h4>
            <address>
              12 Ty-Isaf Park Cir, Risca
              <br />
              Newport NP11 6NF
              <br />
            </address>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="contact-detail-box">
            <i className="fa fa-book fa-3x text-primary" />
            <h4 className="pt-2">Book Today</h4>
            <p>
              Please don't hesitate to get in touch<br></br>to make enquiry
              today.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="contact-map">
            {/* Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.132945524721!2d-3.087044123991382!3d51.60245260375581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871e0356b4ef6f7%3A0xf4f6db95af9a7c27!2s12%20Ty-Isaf%20Park%20Cir%2C%20Risca%2C%20Newport%20NP11%206NF!5e0!3m2!1sen!2suk!4v1708042040892!5m2!1sen!2suk"
              width="600"
              height="450"
              style={{ width: "100%", height: 360 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="col-sm-6">
          <form ref={formRef} onSubmit={sendEmail} className="form-main">
            <div className="form-group pb-2">
              <label htmlFor="name">Name:</label>
              <input
                className="form-control"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
              />
              {/* Error messages */}
            </div>

            <div className="form-group pb-2">
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
              />
              {/* Error messages */}
            </div>

            <div className="form-group pb-2">
              <label htmlFor="subject">Subject:</label>
              <input
                className="form-control"
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
              />
              {/* Error messages */}
            </div>

            <div className="form-group pb-2">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={8}
                style={{ height: "77px" }}
                placeholder="Message"
              />
              {/* Error messages */}
            </div>

            <div className="contact-submit-button pt-2">
              <Button type="submit" className="rounded-pill">
                Send email
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
