import Layout from '../components/layout/Layout';
import BlogContent from '../components/blog/BlogContent';
import BlogBackground from '../components/blog/BlogBackground';
import Meta from '../components/meta/Meta';

export default () => {
  return (
    <>
      <Meta
        title="Iva - Beauty Cosmetics Store"
        description="Beauty is Power"
      />
      <Layout active="blog">
        <BlogBackground />
        <BlogContent />
      </Layout>
    </>
  );
};
