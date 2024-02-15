import React from "react";
import {
  IoIosLeaf,
  IoIosCut,
  IoMdAddCircle,
  IoIosConstruct,
  IoIosHammer,
  IoIosGitBranch,
} from "react-icons/io";
import { MdSearch, MdHealthAndSafety } from "react-icons/md";
import { GiAxeInStump } from "react-icons/gi";
import { FaTree } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <h1 className="text-center pt-5">Our Services</h1>

      <section className="pt-8 pt-md-9 pb-5">
        <div className="container">
          {/* Categories */}
          <div className="row mt-6">
            {/* Category: Tree Removal */}
            <div className="col-md-3 mb-4">
              <a
                href="#"
                className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
              >
                <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
                  <FaTree />
                </span>
                <span className="text-dark mt-3">Tree Removal</span>
              </a>
            </div>
            {/* Category: Tree Pruning */}
            <div className="col-md-3 mb-4">
              <a
                href="#"
                className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
              >
                <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
                  <IoIosLeaf />
                </span>
                <span className="text-dark mt-3">Tree Pruning</span>
              </a>
            </div>
            {/* Category: Tree Health Assessment */}
            <div className="col-md-3 mb-4">
              <a
                href="#"
                className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
              >
                <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
                  <MdHealthAndSafety />
                </span>
                <span className="text-dark mt-3">Tree Health Assessment</span>
              </a>
            </div>
            {/* Category: Tree Planting */}
            <div className="col-md-3 mb-4">
              <a
                href="#"
                className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
              >
                <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
                  <IoMdAddCircle />
                </span>
                <span className="text-dark mt-3">Tree Planting</span>
              </a>
            </div>
            {/* Category: Emergency Tree Services */}
            <div className="col-md-3 mb-4">
              <a
                href="#"
                className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
              >
                <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
                  <IoIosConstruct />
                </span>
                <span className="text-dark mt-3">Emergency Tree Services</span>
              </a>
            </div>
            {/* Category: Cabling and Bracing */}
            <div className="col-md-3 mb-4">
              <a
                href="#"
                className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
              >
                <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
                  <IoIosHammer />
                </span>
                <span className="text-dark mt-3">Cabling and Bracing</span>
              </a>
            </div>
            {/* Category: Stump Grinding */}
            <div className="col-md-3 mb-4">
              <a
                href="#"
                className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
              >
                <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
                  <GiAxeInStump />
                </span>
                <span className="text-dark mt-3">Stump Grinding</span>
              </a>
            </div>
            {/* Category: Tree Consulting and Advice */}
            <div className="col-md-3 mb-4">
              <a
                href="#"
                className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
              >
                <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
                  <IoIosGitBranch />
                </span>
                <span className="text-dark mt-3">
                  Tree Consulting and Advice
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
