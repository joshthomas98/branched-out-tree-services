import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/services" element={<Services />} />

          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
