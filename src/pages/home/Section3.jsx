import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Image1 from '../../assets/menu/burger-1.jpg';
import Image2 from '../../assets/menu/burger-2.jpg';
import Image3 from '../../assets/menu/burger-3.jpg';
import Image4 from '../../assets/menu/burger-4.jpg';
import Image5 from '../../assets/menu/burger-5.jpg';
import Image6 from '../../assets/menu/burger-6.jpg';
import Image7 from '../../assets/menu/burger-7.jpg';
import Image8 from '../../assets/menu/burger-8.jpg';
import Cards from '../../components/Layouts/Cards';


const burgerData = [
  {
    id:'0001',
    image:Image1,
    title:'Crispy Chicken',
    paragraph:'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
    rating:5,
    price:99.15
  },
  {
    id:'0002',
    image:Image2,
    title:'Ultimate Bacon',
    paragraph:'House patty, cheddar cheese, bacon, onion, mustard',
    rating:4.5,
    price:99.32
  },
  {
    id:'0003',
    image:Image3,
    title:'Black Sheep',
    paragraph:'American cheese, tomato relish, avocado, lettuce, red onion',
    rating:4.5,
    price:69.15
  },
  {
    id:'0004',
    image:Image4,
    title:'Double Burger',
    paragraph:'2 patties, cheddar cheese, mustard, pickles, tomatoes',
    rating:4.5,
    price:99.25
  },
  {
    id:'0005',
    image:Image5,
    title:'Double Burger',
    paragraph:'2 patties, cheddar cheese, mustard, pickles, tomatoes',
    rating:3,
    price:99.15
  },
  {
    id:'0006',
    image:Image6,
    title:'Turkey Burger',
    paragraph:'Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles',
    rating:3,
    price:79.18
  },
  {
    id:'0007',
    image:Image7,
    title:'Smokey House',
    paragraph:'Patty, cheddar cheese, onion, lettuce, tomatoes, pickles',
    rating:2.5,
    price:69.15
  },
  {
    id:'0008',
    image:Image8,
    title:'Crispy Chicken',
    paragraph:'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
    rating:2,
    price:89.12
  },
];

const renderRatingIcons = (rating) =>{
  const stars = [];
  for(let a = 0; a < 5; a++){
    if(rating > 0.5){
      stars.push(<i key={a} className="bi bi-star-fill"></i>);
      rating--;
    }
    else if(rating > 0 && rating < 1){
      stars.push(<i key={a} className="bi bi-star-half"></i>);
      rating--;
    }
    else{
      stars.push(<i key={a} className="bi bi-star"></i>);
      rating--;
    }
  }
  return stars;
}

function Section3(){
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{span:8, offset:2}}>
            <h2>Our crazy burgers</h2>
            <p className="menu_desc">
              Aliquam a augue suscipit, luctus neque purus ipsum neque 
              <br />
              undo dolor primis libero tempus,  blandit a cursus varius magna              
            </p>
          </Col>
        </Row>
        <Row>
          {
            burgerData.map((card, index) => (
              <Cards
                key={index}
                image={card.image}
                title={card.title}
                paragraph={card.paragraph}
                rating={card.rating}
                price={card.price}
                renderRatingIcons={renderRatingIcons}
               />
            ))
          }
        </Row>
        <Row>
          <Col lg={5}>
            <div className="ads_box ads_img1">
              <h4>Get Your free</h4>
              <h5>Cheese fries</h5>
              <Link className="btn_red">
                Learn More
              </Link>
            </div>
          </Col>
          <Col lg={7}>
            <div className="ads_box ads_img2">
              <h4>Get Your free</h4>
              <h5>Cheese fries</h5>
              <Link className="btn_red">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;