import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';

import User1 from '../../assets/blog/review-author-1.jpg';
import User2 from '../../assets/blog/review-author-2.jpg';
import User3 from '../../assets/blog/review-author-3.jpg';
import User4 from '../../assets/blog/review-author-4.jpg';

function Section6(){
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption className="d-flex flex-column align-items-center">
                <div className="user_img">
                  <img src={User1} alt="user-1" className="img-fluid" />
                </div>
                <p>
                   Pavle creates detailed 3D models with realistic textures and lighting 
                   <br />
                </p>

                <div className="item_rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption className="d-flex flex-column align-items-center">
                <div className="user_img">
                  <img src={User2} alt="user-2" className="img-fluid" />
                </div>
                <p>
                 Great character design with clean topology and expressive textures.
                 <br/>
                </p>
                <div className="item_rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption className="d-flex flex-column align-items-center">
                <div className="user_img">
                  <img src={User3} alt="user-3" className="img-fluid" />
                </div>
                <p>
                  The props and assets are game ready and optimized. <br/>
                </p>
                <div className="item_rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption className="d-flex flex-column align-items-center">
                <div className="user_img">
                  <img src={User4} alt="user-4" className="img-fluid" />
                </div>
                <p>
                 Lighting and rendering are impressive — every scene feels cinematic.
                 <br/>
                </p>
                <div className="item_rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;