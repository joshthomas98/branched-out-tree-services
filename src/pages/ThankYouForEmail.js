import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ThankYouForEmail = () => {
  return (
    <Container className="py-5 text-center">
      <Row>
        <Col>
          <h1 className="mb-4">Thank You!</h1>
          <h3 className="mb-4">Your email has been received</h3>
          <p className="mb-4">
            We appreciate you reaching out to us. Our team will review your
            message and get back to you as soon as possible.
          </p>
          <Button as={Link} to="/" className="rounded-pill">
            Back to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYouForEmail;
