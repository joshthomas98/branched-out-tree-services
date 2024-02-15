import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import Services from "./pages/Services";

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          {/* Route for the homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Route for the services page */}
          <Route path="/services" element={<Services />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
