import { Row, Col } from 'react-simple-flex-grid';
import Card from '../card/Card';
import Container from '../container/Container';
import Header from '../header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTags } from '@fortawesome/free-solid-svg-icons';
import ReadmoreBtn from '../readMore/readMoreBtn/ReadmoreBtn';

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
const BlogContent = () => {
  return (
    <div className="blog-wrapper">
      <Container>
        <h1 className="blog-content-title">Make-up Tips</h1>
        <Row>
          {blogData.map((b, k) => (
            <Col md={4} xs={12} className="px-2" key={k}>
              <Card className="blog-card my-2">
                <img src={b.src} alt="Not Available" width="100%" />
                <div className="mt-2 py-4 px-3">
                  <h4 className="my-1 blog-title">
                    <a
                      href={`/read-more-page?id=${b.id}`}
                      className="blog-title-a"
                    >
                      {b.title}
                    </a>
                  </h4>
                  <div className="d-flex justify-content-between text-muted blog-date">
                    <div>
                      <FontAwesomeIcon icon={faTags} className="text-brand" />
                      &nbsp; Admin
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-brand"
                      />
                      &nbsp;
                      {new Intl.DateTimeFormat('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                      }).format()}
                    </div>
                  </div>
                  <p className="blog-articles mt-1 mb-3">{b.content}</p>
                  <ReadmoreBtn link={`/read-more-page?id=${b.id}`} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default BlogContent;
