import { Row, Col } from 'react-simple-flex-grid';
import Container from '../container/Container';
import Button from '../button/Button';
import Header from '../header/Header';

const BlogBackground = () => {
  return (
    <>
      <div className="blog-bg-container">
        <div className="d-flex justify-content-center align-items-center blog-bg-content">
          <h1 className="text-center global-headline ">
            Beauty Secrets And Tips
          </h1>
        </div>
      </div>
    </>
  );
};
export default BlogBackground;
