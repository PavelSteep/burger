import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero/hero-1.png'; // 👈 импорт фона
import Burger from '../../assets/hero/hero-2.png';     // картинка для блока

function Section1() {
  return (
    <section 
      className="hero_section" 
      style={{ 
        backgroundImage: `url(${heroImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '164px 0 90px'
      }}
    >
      <Container>
        <Row>
          <Col lg={7}>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white"></h1>
              <h2 className="text-white"></h2>
              <p className="text-white">
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section1;
