import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import Container from '../container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const productData = [
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
const ProductDetailContent = ({ id }) => {
  const product = productData.filter((post) => {
    return post.id === id;
  });

  return (
    <div>
      <div className="product-detail-bg-container"></div>
      <Container>
        <Row className="py-5">
          <Col xs={12} md={5}>
            <img
              src="/image/new-arrivals/chanel-perfume.jpeg"
              alt="Not Available"
              height="500"
            />
          </Col>
          <Col xs={12} md={7}>
            <div className="product-detail-content">
              <h3>Chanel Pefume</h3>
              <p className="global-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                quis architecto, hic suscipit, aut commodi quasi dolores qui,
                vero odit ipsum rem esse velit dolorem impedit eius sequi
                perferendis perspiciatis.
              </p>
              <ul>
                <li>Price: 45,000 MMK</li>
                <li>Size: Medium </li>
                <li>Color: Pink</li>
              </ul>
            </div>
            <div className="product-detail-button-wrap">
              <button className="square-btn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="square-btn">0</button>
              <button className="square-btn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailContent;
