import React from 'react';
import Container from '../container/Container';
import { Row, Col } from 'react-simple-flex-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
  faPhone,
  faHeadphones,
  faMapMarkerAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  LOCATION,
  COMPANY_MAP_URL,
  CONTACT,
  EMAIL_LINK,
} from '../../public/variables/constants';

const contactIntroData = [
  {
    id: 1,
    icon: faMapMarkerAlt,
    title: 'Location',
    description: LOCATION.address,
    href: COMPANY_MAP_URL,
  },
  {
    id: 2,
    icon: faEnvelope,
    title: 'Mail Us',
    description: EMAIL_LINK,
    href: '/',
  },
  {
    id: 3,
    icon: faPhone,
    title: 'Call Us',
    description: CONTACT.primaryContact,
    href: `tel:${CONTACT.primaryContact}`,
  },
];
const ContactIntro = () => (
  <Container>
    <div className="contact-intro-container">
      <Row>
        {contactIntroData.map((c, k) => (
          <Col md={4} xs={12} key={k} className="p-1">
            <div className="contact-intro-div">
              <div className="contact-intro-icon ">
                <FontAwesomeIcon icon={c.icon} />
              </div>
              <div className="pl-3">
                <h3 className="my-1">{c.title}</h3>
                <p>
                  <a
                    href={c.href}
                    className="contact-intro-link"
                    target="_blank"
                  >
                    {c.description}
                  </a>
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </Container>
);

export default ContactIntro;
