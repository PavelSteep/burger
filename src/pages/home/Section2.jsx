import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import '../../styles/HomeStyle.css';
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/salad.png';
import Delivery from '../../assets/about/delivery-bike.png';


// about-card-data
const aboutData = [
  {
    image:Pizza,
    title:'Original',
    text:'Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus'
  },
  {
    image:Salad,
    title:'Original',
    text:'Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus'
  },
  {
    image:Delivery,
    title:'Original',
    text:'Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus'
  },
];

function Section2(){
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{span:8, offset:2}} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor
                an tempus feugiat dolor lacinia cubilia curae integer orci congue and 
                metus integer primis in integer metus              
              </p>
              <Link to="/" className="order_btn btn_red">
                Explore full menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="about_wrapper">
        <Container>
          <Row className="justify-content-center">
            {
              aboutData.map((card, index) =>(
                <Col key={index} lg={4} className="mb-4 text-center">
                  <div className="about_box text-center">
                    <img src={card.image} alt="" className="img-fluid" />
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Section2;