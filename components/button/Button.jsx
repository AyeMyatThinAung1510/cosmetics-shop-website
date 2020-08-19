import classNames from 'classnames';

const Button = ({ onClick, title, className, type }) => {
  return (
    <button
      className={classNames('button-background', { className })}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};
export default Button;
