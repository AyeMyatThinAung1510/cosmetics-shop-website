import Layout from '../components/layout/Layout';
import Meta from '../components/meta/Meta';
import ProductsBackground from '../components/products/ProductsBackground';
import ProductContent from '../components/products/ProductContent';

const Products = () => (
  <>
    <Meta title="Iva - Beauty Cosmetics Store" description="Beauty is Power" />
    <Layout active="products">
      <ProductsBackground />
      <ProductContent />
    </Layout>
  </>
);

export default Products;
