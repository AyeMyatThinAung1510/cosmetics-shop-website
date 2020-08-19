import classNames from 'classnames';

const Header = ({ heading, className }) => (
  <h1 className={classNames(className, 'title')}>{heading}</h1>
);

export default Header;
