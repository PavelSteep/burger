import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import storeApple from '../../assets/shop/appstore.png';
import storeGoogle from '../../assets/shop/googleplay.png';
import storeImg from '../../assets/shop/e-shop.png';
import Brand1 from '../../assets/brands/brand-1.png';
import Brand2 from '../../assets/brands/brand-2.png';
import Brand3 from '../../assets/brands/brand-3.png';
import Brand4 from '../../assets/brands/brand-4.png';
import Brand5 from '../../assets/brands/brand-5.png';
import Brand6 from '../../assets/brands/brand-6.png';
import Brand7 from '../../assets/brands/brand-7.png';
import Brand8 from '../../assets/brands/brand-8.png';

function Section5(){
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row>
            <Col lg={6} className="mb-5">
              <h4>Download mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, blandit varius              
              </p>
              <div className="shop-elems d-flex">
                <Link to="/">
                <img src={storeApple} alt="apple" className="store" />
              </Link>
              <Link to="/">
                <img src={storeGoogle} alt="apple" className="store" />
              </Link>
              </div>
            </Col>
            <Col lg={6}>
              <img src={storeImg} alt="e-shop" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="brand_section">
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="d-flex justify-content-between align-items-center">
                <div className="brand_img">
                  <img src={Brand1} className="img-fluid" alt="brand-1"/>
                </div>
                <div className="brand_img">
                  <img src={Brand2} className="img-fluid" alt="brand-2"/>
                </div>
                <div className="brand_img">
                  <img src={Brand3} className="img-fluid" alt="brand-3"/>
                </div>
                <div className="brand_img">
                  <img src={Brand4} className="img-fluid" alt="brand-4"/>
                </div>
                <div className="brand_img">
                  <img src={Brand5} className="img-fluid" alt="brand-4"/>
                </div>
                <div className="brand_img">
                  <img src={Brand6} className="img-fluid" alt="brand-4"/>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="d-flex justify-content-between align-items-center">
                <div className="brand_img">
                  <img src={Brand5} className="img-fluid" alt="brand-5"/>
                </div>
                <div className="brand_img">
                  <img src={Brand6} className="img-fluid" alt="brand-6"/>
                </div>
                <div className="brand_img">
                  <img src={Brand7} className="img-fluid" alt="brand-7"/>
                </div>
                <div className="brand_img">
                  <img src={Brand8} className="img-fluid" alt="brand-8"/>
                </div>
                <div className="brand_img">
                  <img src={Brand1} className="img-fluid" alt="brand-1"/>
                </div>
                <div className="brand_img">
                  <img src={Brand2} className="img-fluid" alt="brand-2"/>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}

export default Section5;
