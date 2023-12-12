import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Card} from 'react-bootstrap';

function Cards({image, title, paragraph, rating, price, renderRatingIcons}){
  return (
    <Col lg={4} xl={3} className="mb-4">
      <Card>
        <div>
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="body__card">
            <div className="item__rating">{renderRatingIcons(rating)}</div>
            <div className="whishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{paragraph}</Card.Text>
        <div className="menu__price">
          <h5>${price}</h5>
          <div className="add_to_cart">
            <Link to="/">
              <i className="bi bi-bag"></i>
                Add To Cart
            </Link>
          </div>
        </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;