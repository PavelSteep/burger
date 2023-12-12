import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Section7(){
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <Link to="/" className="btn_red">
              Call: 999-888-7777
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;