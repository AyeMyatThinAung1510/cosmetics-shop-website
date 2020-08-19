import Link from 'next/link';
import { Row, Col } from 'react-simple-flex-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  FACEBOOK_URL,
  TITLE,
  YOUTUBE_URL,
  IG_URL,
} from '../../public/variables/constants';
import Container from '../container/Container';
import ContactIntro from '../contact/ContactIntro';

export default () => {
  return (
    <>
      <div className="footer-section pt-5 py-2">
        <ContactIntro />
        <Container>
          <Row className="pt-5">
            <Col md={4} xs={12} className="px-2">
              <div>
                <img src="/image/logo.png" alt="logo" className="pt-1"></img>

                <p className="pt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati commodi recusandae
                </p>

                <div className="footer-social-icon py-2">
                  <div>
                    <a href={FACEBOOK_URL} title={TITLE} target="_blank">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="facebook-bg"
                      />
                    </a>
                    <a href={IG_URL} title={TITLE} target="_blank">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="instagram-bg"
                      />
                    </a>
                    <a href={IG_URL} title={TITLE} target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="linkedin-bg"
                      />
                    </a>
                    <a href={YOUTUBE_URL} title={TITLE} target="_blank">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="youtube-bg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12} className="px-2">
              <h4 className="quicklink-title">Quick Links</h4>
              <div className="d-flex justify-content-around">
                <ul>
                  <li>
                    <Link href="/">
                      <a href="/">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/aboutus">
                      <a href="/aboutus">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products">
                      <a href="/products">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Products
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact">
                      <a href="/contact">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Contact
                      </a>
                    </Link>
                  </li>
                </ul>

                <ul>
                  <li>
                    <Link href="/blog">
                      <a href="/blog">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Blog
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/sitemap">
                      <a href="/sitemap">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon "
                        />
                        &nbsp; Site Map
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy">
                      <a href="/policy">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="list-minus-icon"
                        />
                        &nbsp; Policy
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={4} xs={12} className="px-2">
              <h4>Business Hours</h4>
              <p>
                Our support available to help you 24 hours a day, seven days a
                week.
              </p>
              <div className="d-flex justify-content-between pt-3 footer-business-hour">
                <span>Mon-Fri:</span>
                <span>9AM - 5:30PM</span>
              </div>
              <div className="d-flex justify-content-between pt-3 footer-business-hour">
                <span>Sat-Sun:</span>
                <span>Close</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
