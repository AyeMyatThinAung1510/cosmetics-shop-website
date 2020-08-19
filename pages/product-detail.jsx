import Layout from '../components/layout/Layout';
import Meta from '../components/meta/Meta';
import ProductDetailContent from '../components/productDetail/ProductDetailContent';

export default class ProductDetail extends React.Component {
  static async getInitialProps(res) {
    const {
      query: { id },
    } = res;
    return { id };
  }
  render() {
    const { id } = this.props;

    return (
      <>
        <Meta title="Product Detail" description="Blog Read More" />
        <Layout active="home">
          <ProductDetailContent id={id} />
        </Layout>
      </>
    );
  }
}
