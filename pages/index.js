import { SINGLE_PAGE_QUERY } from '../lib/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export default function NextPage(products) {
  return 'hello';
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_URL,
    cache: new InMemoryCache(),
  });
  const response = await client.query({
    query: SINGLE_PAGE_QUERY,
  });
  const products = response.data.products.edges;
  return {
    props: { products },
  };
}
