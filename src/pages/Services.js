import React, { useState } from "react";
import {
  IoIosLeaf,
  IoMdAddCircle,
  IoIosConstruct,
  IoIosHammer,
  IoIosGitBranch,
} from "react-icons/io";
import { MdHealthAndSafety } from "react-icons/md";
import { GiAxeInStump } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ServiceModal = ({ show, onHide, title, description }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
      </Modal.Body>
    </Modal>
  );
};

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      icon: FaTree,
      title: "Tree Removal",
      description:
        "Our Tree Removal service includes the safe and efficient removal of trees of all sizes. Our team of professionals uses industry-leading techniques and equipment to ensure that trees are removed safely, minimizing any potential damage to surrounding property. We also offer stump removal as part of this service to leave your property clean and clear.",
    },
    {
      icon: IoIosLeaf,
      title: "Tree Pruning",
      description:
        "Tree Pruning is essential for maintaining the health and appearance of your trees. Our expert arborists carefully assess each tree's needs and prune branches to promote healthy growth, improve structure, and enhance aesthetics. We use proper pruning techniques to remove dead or diseased branches, improve air circulation, and reduce the risk of storm damage.",
    },
    {
      icon: MdHealthAndSafety,
      title: "Tree Health Assessment",
      description:
        "Our Tree Health Assessment service helps identify and address any issues affecting the health and vitality of your trees. Our certified arborists conduct thorough inspections to diagnose diseases, pest infestations, nutrient deficiencies, and other issues. Based on our findings, we develop customized treatment plans to restore your trees' health and prevent future problems.",
    },
    {
      icon: IoMdAddCircle,
      title: "Tree Planting",
      description:
        "Tree Planting is a crucial step in enhancing the beauty and sustainability of your landscape. Our team specializes in selecting the right tree species for your location, considering factors such as soil type, sun exposure, and available space. We handle the entire planting process, from site preparation to proper tree placement and ongoing care, to ensure the long-term health and growth of your new trees.",
    },
    {
      icon: IoIosConstruct,
      title: "Emergency Tree Services",
      description:
        "Our Emergency Tree Services provide prompt assistance in the event of storm damage, fallen trees, or other tree-related emergencies. Our team is on-hand to respond to urgent situations and mitigate risks to your property and safety. We have the expertise and equipment to safely remove fallen trees, clear debris, and restore your property to a safe condition.",
    },
    {
      icon: IoIosHammer,
      title: "Cabling and Bracing",
      description:
        "Cabling and Bracing are preventive measures used to protect trees with structural weaknesses or defects. Our certified arborists assess your trees' structural integrity and recommend cabling and bracing systems where necessary to provide additional support and stability. These systems help reduce the risk of branch or trunk failure, prolonging the life of your trees and enhancing safety.",
    },
    {
      icon: GiAxeInStump,
      title: "Stump Grinding",
      description:
        "Stump Grinding is the most effective method for removing tree stumps from your property. Our state-of-the-art equipment allows us to grind stumps below ground level, eliminating tripping hazards and creating space for landscaping or construction projects. We take care to minimize impact on surrounding vegetation and leave your property clean and ready for use.",
    },
    {
      icon: IoIosGitBranch,
      title: "Tree Consulting and Advice",
      description:
        "Our Tree Consulting and Advice service offers expert guidance on all aspects of tree care and management. Whether you need help selecting the right trees for your property, diagnosing tree problems, or developing a long-term care plan, our certified arborists are here to help. We provide personalized recommendations tailored to your specific needs and goals to ensure the health and beauty of your trees.",
    },
  ];

  const navigateToBookQuote = () => {
    navigate("/bookquote");
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div>
      <h1 className="text-center pt-5">Our Services</h1>

      <section className="pt-5 pt-md-9 pb-4">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-3 mb-5 py-3">
                <div
                  className="card align-items-center text-decoration-none border-0 hover-lift-light"
                  onClick={() => handleServiceClick(service)}
                >
                  <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
                    <service.icon />
                  </span>
                  <span className="text-dark mt-3 text-center">
                    {service.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-4 pb-2">
            <Button onClick={navigateToBookQuote} className="rounded-pill">
              Book a free quote now
            </Button>
          </div>
        </div>
      </section>

      <ServiceModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={selectedService ? selectedService.title : ""}
        description={selectedService ? selectedService.description : ""}
      />
    </div>
  );
};

export default Services;
