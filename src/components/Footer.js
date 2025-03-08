// src/components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // Create and customize this CSS file as needed

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Pet Care Shop is your one-stop destination for premium pet products,
              dedicated to offering high-quality food, toys, grooming supplies, and more.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: support@petcareshop.com</li>
              <li>Phone: 0000000000 </li>
              <li>Address: 123 Pet Lane, Mumbai, India</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled social-links">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>© {new Date().getFullYear()} Pet Care Shop. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
