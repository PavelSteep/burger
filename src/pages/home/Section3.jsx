import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Image1 from '../../assets/menu/burger-1.png';
import Image2 from '../../assets/menu/burger-2.png';
import Image3 from '../../assets/menu/burger-3.png';
import Image4 from '../../assets/menu/burger-4.png';
import Image5 from '../../assets/menu/burger-5.png';
import Image6 from '../../assets/menu/burger-6.png';
import Image7 from '../../assets/menu/burger-7.png';
import Image8 from '../../assets/menu/burger-8.png';
import Cards from '../../components/Layouts/Cards';


const burgerData = [
  {
    id:'0001',
    image:Image1,
    title:'Character 3D model',
    paragraph:'European brown Cossack armed with a saber',
    rating:5,
    price:2026
  },
  {
    id:'0002',
    image:Image2,
    title:'Low poly 3D model mesh',
    paragraph:'European brown Cossack armed with a saber',
    rating:5,
    price:2026
  },
  {
    id:'0003',
    image:Image3,
    title:'Character 3D model',
    paragraph:'European green Cossack armed with a rifle',
    rating:5,
    price:2026
  },
  {
    id:'0004',
    image:Image4,
    title:'Low poly 3D model mesh',
    paragraph:'European green Cossack armed with a rifle',
    rating:5,
    price:2026
  },
  {
    id:'0005',
    image:Image5,
    title:'Sabre Low poly 3D model',
    paragraph:'Saber of the European Cossack',
    rating:5,
    price:2026
  },
  {
    id:'0006',
    image:Image6,
    title:'Low poly 3D model mesh',
    paragraph:'Saber of the European Cossack',
    rating:5,
    price:2026
  },
  {
    id:'0007',
    image:Image7,
    title:'Musket Low poly 3D model',
    paragraph:'Rifle of the European Cossack',
    rating:5,
    price:2026
  },
  {
    id:'0008',
    image:Image8,
    title:'Low poly 3D model mesh',
    paragraph:'Rifle of the European Cossack',
    rating:5,
    price:2026
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
            <h2>My 3D Portfolio Showcase</h2>
            <p className="menu_desc">
               Explore characters, environments, and props created in Blender. 
              <br /> 
               Each model is crafted with attention to detail, textures, and lighting,  
               bringing imagination to life in 3D.              
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
              <h4>Discover</h4>
              <h5>Character Models</h5>
              <Link className="btn_red">
                View Gallery
              </Link>
            </div>
          </Col>
          <Col lg={7}>
            <div className="ads_box ads_img2">
              <h4>Explore</h4>
              <h5>Environment Scenes</h5>
              <Link className="btn_red">
                See Details
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;