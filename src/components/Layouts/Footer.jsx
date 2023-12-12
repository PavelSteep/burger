import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Footer(){
  // Scroll top
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }

  const listenScroll = ()=>{
    let heightHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(()=>{
    window.addEventListener('scroll', listenScroll);
  });

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={3}>
              <div className="text-center">
                <h5>Location</h5>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="text-center">
                <h5>Working hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="text-center">
                <h5>Order now</h5>
                <p>Quaerat neque purus ipsum</p>
                <p>
                  <Link to="tel:9998887777" className="calling">
                    999-888-7777
                  </Link>
                </p>
              </div>            
            </Col>
            <Col lg={3}>
              <div className="text-center">
                <h5>Follow us</h5>
                <p>Quaerat neque purus ipsum</p>
                <ul className="socials">
                  <li>
                    <Link to="/">
                      <i class="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>            
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul>
                  <li>
                    <span>
                      © 2023 <i>TASTYBURGER</i>  All rights reserved
                    </span>
                  </li>
                  <li>
                    <Link to="/">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Terms of use
                    </Link>                  
                  </li>
                  <li>
                    <Link to="/">
                      Privacy Policy
                    </Link>                  
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>   
      {
        isVisible && (
          <div className="scroll_top" onClick={scrollTop}>
            <i className="bi bi-arrow-up"></i>
          </div> 
        )
      }
    </>

  );
}

export default Footer;