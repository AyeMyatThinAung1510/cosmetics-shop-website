import React from 'react';
import Container from '../container/Container';
import { Row, Col } from 'react-simple-flex-grid';
import Header from '../header/Header';
import Button from '../button/Button';

const blogData = [
  {
    id: 1,
    src: '/image/beauty-blog.jpg',
    title: 'Blog Article',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco labori  nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    src: '/image/beauty-blog.jpg',
    title: 'Blog Article ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco labori  nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    src: '/image/beauty-blog.jpg',
    title: 'Blog Article ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco labori  nisi ut aliquip ex ea commodo consequat.',
  },
];
const ReadMoreContent = ({ id }) => {
  const blog = blogData.filter((post) => post.id === id);

  return (
    <div className="read-more-content-wapper">
      <div className="readMore-bg-container">
        <div className="readMore-bg-content">
          <Header heading="Blog Article" className="text-white my-2" />
        </div>
      </div>

      <div className="readMore-text-div">
        <Container>
          <Row>
            <Col xs={12} md={{ span: 10, offset: 1 }}>
              <div className="d-flex justify-content-between">
                <span className="text-muted">July 29, 2009</span>

                <span className="readMore-category">Admin</span>
              </div>
              <h2>Blog Article</h2>
            </Col>
            <Col xs={12} md={{ span: 10, offset: 1 }}>
              <img
                src="/image/beauty-blog.jpg"
                alt="readMore"
                className="readMore-image"
              ></img>
            </Col>
            <Col xs={12} md={{ span: 10, offset: 1 }}>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                incidunt eum? Dolores aliquam aut a excepturi reprehenderit,
                laboriosam similique amet odit repudiandae sed cum veniam
                dolorem expedita, temporibus et voluptate?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                incidunt eum? Dolores aliquam aut a excepturi reprehenderit,
                laboriosam similique amet odit repudiandae sed cum veniam
                dolorem expedita, temporibus et voluptate?
              </p>
              <div className="d-flex justify-content-end">
                <a href="/blog">
                  <Button title="Back"></Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ReadMoreContent;
