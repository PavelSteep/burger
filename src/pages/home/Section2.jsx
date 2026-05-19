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
    title:'Character Design',
    text:'Creating unique characters with detailed anatomy, textures, and expressive features that bring stories to life.'
  },
  {
    image:Salad,
    title:'Environment Modeling',
    text:'Building immersive scenes and environments — from architecture to landscapes — with a focus on lighting and composition.'
  },
  {
    image:Delivery,
    title:'Props & Assets',
    text:'Designing props and assets for games and animation: weapons, furniture, vehicles, and other elements that add realism.'
  },
];

function Section2(){
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{span:8, offset:2}} className="text-center">
              <h2>Bring imagination to life in 3D</h2>
              <p>
                Explore my collection of detailed 3D models and scenes — from characters 
                to environments. Each render is crafted with attention to texture, lighting, 
                and storytelling, designed to showcase creativity and technical skill.            
              </p>
             <a href="https://bpv535.artstation.com/" target="_blank" rel="noopener noreferrer" className="order_btn btn_red">
                <i className="bi bi-box"></i> Explore 3D Models
             </a>
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