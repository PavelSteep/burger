import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PromotionIMG from '../../assets/promotion/pro.png';
import ParallaxBG from '../../assets/promotion/parallax-bg.png';

function Section4(){
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row>
            <Col lg={6} className="prom-img">
              <img src={PromotionIMG} alt="promotion" />
            </Col>
            <Col lg={6} className="prom-text">
              <h2>Bring imagination to life in 3D</h2>
              <p>
                Explore detailed 3D environments and models created in Blender.  
                Each render is crafted with textures, lighting, and atmosphere  
                to showcase creativity and technical skill.             
              </p>
              <ul>
                <li>
                  <p>
                    Realistic architectural modeling with attention to proportions and design
                  </p>
                </li>
                <li>
                  <p>
                    High quality textures and shading for immersive visual storytelling                  </p>
                </li>
                <li>
                  <p>
                    Lighting and rendering techniques that bring scenes to life                
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

       {/* Параллакс блок */}
      <section
        className="bg_parallax"
        style={{
          backgroundImage: `url(${ParallaxBG})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          minHeight: '100vh',
          width: '100%',
        }}
      ></section>
      
    </>
  );
}

export default Section4;