import React from "react";

const Contact = () => {
  return (
    <div className="container bootstrap snippets bootdeys py-5">
      <div className="row text-center">
        <div className="col-sm-4">
          <div className="contact-detail-box">
            <i className="fa fa-th fa-3x text-primary" />
            <h4 className="pt-2">Get In Touch</h4>
            <abbr title="Phone">P:</abbr> 07593218920
            <br />
            E:{" "}
            <a href="mailto:email@email.com" className="text-muted">
              branchedouttreeservices@gmail.com
            </a>
          </div>
        </div>
        <div className="col-sm-4">
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
        <div className="col-sm-4">
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
          <form
            role="form"
            name="ajax-form"
            id="ajax-form"
            action="https://formsubmit.io/send/coderthemes@gmail.com"
            method="post"
            className="form-main"
          >
            <div className="form-group">
              <label htmlFor="name2">Name:</label>
              <input
                className="form-control"
                id="name2"
                name="name"
                onBlur={(e) => {
                  if (e.target.value === "") e.target.value = "Name";
                }}
                onFocus={(e) => {
                  if (e.target.value === "Name") e.target.value = "";
                }}
                type="text"
                placeholder="Name"
              />
              <div className="error" id="err-name" style={{ display: "none" }}>
                Please enter name
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email2">Email:</label>
              <input
                className="form-control"
                id="email2"
                name="email"
                type="text"
                onFocus={(e) => {
                  if (e.target.value === "E-mail") e.target.value = "";
                }}
                onBlur={(e) => {
                  if (e.target.value === "") e.target.value = "E-mail";
                }}
                placeholder="Email"
              />
              <div
                className="error"
                id="err-emailvld"
                style={{ display: "none" }}
              >
                E-mail is not a valid format
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message2">Message:</label>
              <textarea
                className="form-control"
                id="message2"
                name="message"
                rows={5}
                onBlur={(e) => {
                  if (e.target.value === "") e.target.value = "Message";
                }}
                onFocus={(e) => {
                  if (e.target.value === "Message") e.target.value = "";
                }}
                placeholder="Message"
              />

              <div className="contact-submit-button">
                <button
                  className="btn btn-primary btn-shadow btn-rounded w-md mt-2"
                  id="send"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
