import Container from '../container/Container';

const CopyRight = () => (
  <div className="copyright-area p-2">
    <Container>
      <div className="copyright-text d-flex justify-content-between">
        <p className="text-center">
          Copyright &copy;
          <span> {new Date().getFullYear()}</span>, All Rights Reserved.
        </p>
        <p>Privacy Policy - Terms & Conditions</p>
      </div>
    </Container>
  </div>
);

export default CopyRight;
