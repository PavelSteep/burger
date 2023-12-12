import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Burger from '../../assets/hero/hero-2.png';

function Section1(){
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="burger-block">
              <img src={Burger} alt="burger" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="p_xs">Only</h4>
                  <h3 className="p_xs">$7.99</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New burger</h1>
              <h2 className="text-white">with onion</h2>
              <p className="text-white">
                Feugiat primis ligula risus auctor laoreet augue
                egestas mauris viverra tortor in iaculis pretium
                at magna mauris ipsum primis rhoncus feugiat
              </p>
              <Link to="/" className="order_btn">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section1;