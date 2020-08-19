import ScrollUpButton from 'react-scroll-up';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
const ScrollUp = () => (
  <div>
    <ScrollUpButton
      showUnder={160}
      style={{
        backgroundColor: '#ee2d7a',
        boxShadow: '0 0 1px 0 #c5c4c4',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        bottom: '95px',
        width: 45,
        height: 45,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </ScrollUpButton>
  </div>
);

export default ScrollUp;
