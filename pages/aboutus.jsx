import Layout from '../components/layout/Layout';
import Meta from '../components/meta/Meta';
import AboutusBackground from '../components/aboutus/AboutusBackground';

export default () => {
  return (
    <>
      <Meta
        title="Iva - Beauty Cosmetics Store"
        description="Beauty is Power"
      />
      <Layout active="aboutus">
        <AboutusBackground />
      </Layout>
    </>
  );
};
