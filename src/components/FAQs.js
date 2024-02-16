import React from "react";
import Accordion from "react-bootstrap/Accordion";

function FAQAccordion() {
  return (
    <>
      <h2 className="text-light pb-3">Frequently Asked Questions</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What tree services do you offer?</Accordion.Header>
          <Accordion.Body>
            <em>
              Branched Out Tree Services offers a wide range of tree care
              services, including tree removal, tree pruning, stump grinding,
              tree trimming, and emergency tree services. Whether you need
              routine maintenance or urgent tree care, our team is here to
              assist you.
            </em>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How do I request a quote for tree removal?
          </Accordion.Header>
          <Accordion.Body>
            <em>
              You can request a quote for tree removal by contacting us through
              our website or by giving us a call. Our team will gather the
              necessary information about your tree removal needs and provide
              you with a detailed quote tailored to your requirements.
            </em>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Do you offer emergency tree services?
          </Accordion.Header>
          <Accordion.Body>
            <em>
              Yes, we provide emergency tree services for situations such as
              storm damage, fallen trees, and hazardous tree conditions. Our
              team is on-hand to respond promptly to your emergency tree care
              needs.
            </em>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How can I schedule tree maintenance services?
          </Accordion.Header>
          <Accordion.Body>
            <em>
              Scheduling tree maintenance services is easy. Simply reach out to
              us via the Contact page on our website or give us a call, and our
              team will work with you to find a convenient time for the
              services. Whether you need regular pruning or seasonal tree care,
              we'll ensure your trees receive the attention they need.
            </em>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            What safety measures do you follow during tree removal?
          </Accordion.Header>
          <Accordion.Body>
            <em>
              Safety is our top priority during tree removal. Our team follows
              industry-standard safety protocols, including the use of personal
              protective equipment (PPE), proper equipment inspection and
              maintenance, and adherence to established safety guidelines. We
              also take measures to secure the work area and ensure the safety
              of nearby structures and individuals.
            </em>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Can you provide references or examples of past work?
          </Accordion.Header>
          <Accordion.Body>
            <em>
              Yes, we are happy to provide references or examples of our past
              work. Please contact us, and we'll be glad to share testimonials
              from satisfied customers or show you photos of completed tree care
              projects.
            </em>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            What factors affect the cost of tree services?
          </Accordion.Header>
          <Accordion.Body>
            <em>
              The cost of tree services can vary depending on factors such as
              the size and location of the tree, the complexity of the job,
              accessibility issues, the need for special equipment, and
              additional services required (e.g., stump grinding, debris
              removal). We provide transparent pricing and will discuss all cost
              factors with you before starting any work.
            </em>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Do you have insurance coverage?</Accordion.Header>
          <Accordion.Body>
            <em>
              Yes, Branched Out Tree Services is fully insured for liability and
              worker's compensation. Our insurance coverage provides protection
              for both our team members and our customers in the event of any
              unforeseen accidents or property damage during tree care
              operations.
            </em>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FAQAccordion;
