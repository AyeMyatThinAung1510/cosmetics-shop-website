import React from 'react';
import Container from '../container/Container';
import { Row, Col } from 'react-simple-flex-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faLeaf,
  faFlask,
  faFlag,
} from '@fortawesome/free-solid-svg-icons';
const data = [
  {
    id: 1,
    icon: faHeart,
    title: 'Cruelty Heart',
  },
  {
    id: 2,
    icon: faLeaf,
    title: 'Vegan',
  },
  {
    id: 3,
    icon: faFlask,
    title: 'Natural Ingredients',
  },
  {
    id: 4,
    icon: faFlag,
    title: 'Made in Korea',
  },
];

const BrandDetail = () => (
  <div className="brand-detail-container">
    <Container>
      <Row>
        {data.map((c, k) => (
          <Col md={3} xs={12} key={k} className="p-1">
            <div className="brand-detail-icon d-flex justify-content-center">
              <FontAwesomeIcon icon={c.icon} />
            </div>
            <h3 className="my-1 text-center text-muted">{c.title}</h3>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default BrandDetail;
