import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const listenScroll = () => {
    const heightHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setIsVisible(windowScroll > heightHidden);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return () => window.removeEventListener('scroll', listenScroll);
  }, []);

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={3}>
              <div className="text-center">
                <h5>Location</h5>
                <p>3D Artist Portfolio</p>
                <p>Hard Surface & Environment</p>
                <p>Based in Ukraine</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="text-center">
                <h5>Services</h5>
                <p>3D Modeling</p>
                <p>Texturing & Rendering</p>
                <p>Game Assets & Environment</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="text-center">
                <h5>Contact me</h5>
                <p>My number phone</p>
                <p>
                  <a href="tel:+380664637942" className="calling">
                    066-463-7942
                  </a>
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="text-center">
                <h5>Follow me</h5>
                <p>My telegram</p>
                <ul className="socials">
                  <li>
                    <a href="https://t.me/pavlobiriukov21" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/380664637942" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/pavel39223/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://bpv535.artstation.com/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-globe"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul>
                  <li>
                    <span>
                      © 2026 <i>Biriukov Pavlo</i> 3D Artist Portfolio
                    </span>
                  </li>
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/terms">Terms of use</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
