import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import Link from 'next/link';
import Button from '../button/Button';
import Container from '../container/Container';

const ShopIntro = () => (
  <div className="shop-intro-container">
    <Container>
      <Row>
        <Col md={6} xs={12} className="align-self-center animated fadeInUpSec">
          <img
            src="/image/shop-intro.png"
            alt="Not Available"
            height="auto"
            width="100%"
          />
        </Col>
        <Col md={6} xs={12} className="align-self-center px-3">
          <h1 className="global-intro-header">
            <span className="text-brand">Get 20% Off</span> on all Cosmetic
            Cream Packs
          </h1>
          <Link href="/products">
            <a href="/products">
              <Button title="Browse Products" />
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ShopIntro;
