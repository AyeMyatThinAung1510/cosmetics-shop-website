import React from 'react';
import Container from '../container/Container';
import { Row, Col } from 'react-simple-flex-grid';
const AboutusIntro = () => (
  <div className="global-padding">
    <Container>
      <Row>
        <Col xs={12} md={6} className="px-2 d-flex justify-content-center">
          <div className=" align-self-center">
            <p className="global-content">
              <span className="text-brand font-size-30">Lva cosmetics </span>
              dolor sit amet consectetur adipisicing elit. Maxime aperiam
              perferendis enim dicta aliquam sed fugit voluptatum inventore
              itaque illo, sapiente odit earum cupiditate laborum veniam, quos a
              modi. Vero!
              <br />
              dolor sit amet consectetur adipisicing elit. Maxime aperiam
              perferendis enim dicta aliquam sed fugit voluptatum inventore
              itaque illo, sapiente odit earum cupiditate laborum veniam, quos a
              modi. Vero!
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} className="px-2">
          <img
            src="/image/aboutus-intro.jpg"
            alt="Not Available"
            height="350"
            width="100%"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutusIntro;
