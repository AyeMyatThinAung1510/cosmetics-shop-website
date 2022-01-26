import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Meta from '../../components/meta/Meta';
import ProductDetailContent from '../../components/products/detail/ProductDetailContent';

const ProductDetail = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <Meta title="Product Detail" description="Blog Read More" />
      <Layout active="home">
        <ProductDetailContent id={id} />
      </Layout>
    </>
  );
};
// export async function getStaticPaths() {
//   const propertyRes = await fetch(`${API_URL}`);
//   const properties = await propertyRes.data;

//   const paths = _.map(properties, (p) => ({
//     params: { id: p.id },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {

//   const res = await getAll({
//     _sort: "created_at:desc",
//     _limit: 3,
//   });

//   return {
//     props: {
//       data: await res.data,

//     },
//     revalidate: REVALIDATE,
//   };
// }

export default ProductDetail;
