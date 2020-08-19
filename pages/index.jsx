import Layout from '../components/layout/Layout';
import Meta from '../components/meta/Meta';
import Headline from '../components/headline/Headline';
import ShopIntro from '../components/shop/ShopIntro';
import FeatureProduct from '../components/featureProduct/FeatureProduct';
import ProductIntro from '../components/products/ProductIntro';
import BrandDetail from '../components/brandDetail/BrandDetail';
import AboutusIntro from '../components/aboutus/AboutusIntro';

const Index = () => (
  <>
    <Meta title="Iva - Beauty Cosmetics Store" description="Beauty is Power" />
    <Layout active="home">
      <Headline />
      <AboutusIntro />
      <BrandDetail />
      <FeatureProduct />
      <ProductIntro />
      <ShopIntro />
    </Layout>
  </>
);

export default Index;
