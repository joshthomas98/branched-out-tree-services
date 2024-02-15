import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand">
            Branched Out Tree Services
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Collapse in={open}>
            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/aboutus" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/services" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/booknow" className="nav-link">
                    Book Now
                  </a>
                </li>
              </ul>
            </div>
          </Collapse>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
