import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Meta from '../../components/meta/Meta';
import ReadMoreContent from '../../components/readMore/ReadMoreContent';

const BlogDetail = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <>
      <Meta title="ReadMore" description="Blog Read More" />
      <Layout active="blog">
        <ReadMoreContent id={id} />
      </Layout>
    </>
  );
};
export default BlogDetail;
