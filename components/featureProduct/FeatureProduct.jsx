import React from 'react';
import Header from '../header/Header';
import Container from '../container/Container';
import { Row, Col } from 'react-simple-flex-grid';
import Button from '../button/Button';
import Link from 'next/link';
import ItemCard from '../products/ItemCard';

const featureProductData = [
  {
    id: 1,
    src: '/image/new-arrivals/sulwhasoo-cushion.jpeg',
    title: 'Sulwhasoo Cushion',
    description: '52,000 MMK',
  },
  {
    id: 2,
    src: '/image/new-arrivals/dior-cushion.jpg',
    title: 'Dior Cushion',
    description: '45,000 MMK',
  },
  {
    id: 3,
    src: '/image/new-arrivals/illuminator.jpeg',
    title: 'Sha&shi illuminator',
    description: '45,000 MMK',
  },
  {
    id: 4,
    src: '/image/new-arrivals/highlighter.jpeg',
    title: 'Highlighter',
    description: '45,000 MMK',
  },
  {
    id: 5,
    src: '/image/new-arrivals/chanel-perfume.jpeg',
    title: 'Chanel Perfume',
    description: '45,000 MMK',
  },
  {
    id: 6,
    src: '/image/new-arrivals/lipstick.jpeg',
    title: 'Matte Lipstick',
    description: '45,000 MMK',
  },
  {
    id: 7,
    src: '/image/new-arrivals/blusher.jpeg',
    title: 'Blusher',
    description: '15,000 MMK',
  },
  {
    id: 8,
    src: '/image/new-arrivals/shampoo.jpg',
    title: 'Bondi Boost',
    description: '25,000 MMK',
  },
];

const FeatureProduct = () => (
  <div className="py-5">
    <Header heading="Featured Products" className="text-center" />
    <Container>
      <Row>
        {featureProductData.map((c, k) => (
          <Col md={3} xs={6} key={k} className="p-2">
            <ItemCard
              id={c.id}
              src={c.src}
              title={c.title}
              description={c.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default FeatureProduct;
