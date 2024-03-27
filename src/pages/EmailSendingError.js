import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const EmailSendingError = () => {
  return (
    <Container className="py-5 text-center">
      <Row>
        <Col>
          <h1 className="mb-4">Oops!</h1>
          <h3 className="mb-4">Sorry, something went wrong</h3>
          <p className="mb-4">
            Please ensure that all fields are filled correctly and try again.
            <br /> If the issue persists, feel free to contact us externally
            using the information below.
          </p>

          <p className="py-3">
            <FontAwesomeIcon className="mx-1" icon={faPhoneAlt} /> 01234 123123{" "}
            <span className="mx-4"></span>
            <FontAwesomeIcon className="mx-1" icon={faEnvelope} />{" "}
            jobdone@live.com
          </p>

          <div>
            <Button as={Link} to="/contact" className="mr-3 rounded-pill">
              Try Again
            </Button>
            <span className="mx-4"></span>
            <Button as={Link} to="/" className="rounded-pill">
              Back to Homepage
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailSendingError;
