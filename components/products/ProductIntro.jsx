import React from 'react';
import Container from '../container/Container';
import { Row, Col } from 'react-simple-flex-grid';
import Link from 'next/link';
import Button from '../button/Button';

const CollectionIntro = () => (
  <div className="collection-intro-container global-padding">
    <Container>
      <Row>
        <Col md={6} xs={12} className="align-self-center px-3">
          <h1 className="global-intro-header">
            <span className="text-brand">Be a Beauty</span> with our products
          </h1>
          <Link href="/collections">
            <a href="/collections">
              <Button title="See Our Collections" />
            </a>
          </Link>
        </Col>
        <Col md={6} xs={12} className="align-self-center animated fadeInUpSec">
          <img
            // src="/image/collection-intro.jpeg"
            alt="Not Available"
            height="auto"
            width="100%"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default CollectionIntro;
