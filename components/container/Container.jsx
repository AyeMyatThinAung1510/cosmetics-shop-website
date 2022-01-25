import classNames from 'classnames';

const Container = ({ fluid, children, className, ...rest }) => {
  return (
    <div
      className={classNames(fluid ? 'container-fluid' : 'container', className)}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Container;
