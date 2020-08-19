import { Fade } from 'react-slideshow-image';
import Button from '../button/Button';
// import { Row, Col } from 'react-simple-flex-grid';
const slideImages = [
  '/image/landing-img-1.jpg',
  '/image/landing-img-2.jpg',
  '/image/landing-img-3.jpg',
];

const Headline = () => {
  return (
    <>
      <div>
        <Fade duration="3000">
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[0]})` }}
              className="each-slide-img-wrap"
            >
              <div className="each-slide-content content-1">
                {/* <h3>Presenting Perfect Cosmetics</h3> */}

                <h1 className="text-muted">Beauty is Magic</h1>
                <Button title="Shop Now" />
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[1]})` }}
              className="each-slide-img-wrap justify-content-center"
            >
              <div className="each-slide-content text-center content-2">
                <h3>Presenting Perfect Cosmetics</h3>

                <h1 className="text-muted">Beauty is Magic</h1>
                <Button title="Shop Now" />
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[2]})` }}
              className="each-slide-img-wrap justify-content-end"
            >
              <div className="each-slide-content content-3">
                {/* <h3></h3> */}

                <h1 className="text-muted">Find Your Beauty</h1>
                <Button title="Shop Now" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};
export default Headline;
