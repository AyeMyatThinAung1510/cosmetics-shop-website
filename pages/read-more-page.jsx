import Layout from '../components/layout/Layout';
import Meta from '../components/meta/Meta';
import ReadMoreContent from '../components/readMore/ReadMoreContent';

export default class ReadMorePage extends React.Component {
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
        <Meta title="ReadMore" description="Blog Read More" />
        <Layout active="blog">
          <ReadMoreContent id={id} />
        </Layout>
      </>
    );
  }
}
