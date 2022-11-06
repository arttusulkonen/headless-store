import { GET_ALL_PRODUCTS, GET_PRODUCT } from '../../lib/queries';
// import client from '../../lib/helpers';
import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ShopifyData } from '../../lib/queries';
import ProductPageContent from '../../components/ProductPageContent';

export default function ProductPage({ product }) {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  );
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_PRODUCTS,
  });

  const paths = data.products.edges.map((item) => {
    const handle = String(item.node.slug);

    return {
      params: { product: handle },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.product.toString();
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_URL,
    cache: new InMemoryCache(),
  });
  let graphQuery = {
    query: GET_PRODUCT,
    variables: {
      id: slug,
    },
  };

  let { data } = await client.query(graphQuery);

  const product = data.product;

  return {
    props: { product },
  };
}
