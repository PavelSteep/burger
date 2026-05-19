import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Section7(){
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h4>Check My Portfolio</h4>
            <h2>See My Latest 3D Works!</h2>
             <a 
               href="https://www.artstation.com/pavel39223" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn_red"
              >
                  Visit ArtStation
              </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;