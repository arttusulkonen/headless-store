import { gql } from '@apollo/client';
const domain = process.env.NEXT_PUBLIC_WORDPRESS_URL;

export const SINGLE_PAGE_QUERY = gql`
  query NewQuery {
    pageBy(pageId: 61) {
      title
    }
    products {
      edges {
        node {
          id
          name
          slug
          image {
            sourceUrl
          }
          galleryImages {
            edges {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on SimpleProduct {
            id
            name
            regularPrice
            price
          }
        }
      }
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products(first: 25) {
      edges {
        node {
          name
          id
          slug
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id, idType: SLUG) {
      name
      description
      image {
        sourceUrl
        altText
      }
      galleryImages {
        edges {
          node {
            sourceUrl
            altText
          }
        }
      }
      related(first: 25) {
        edges {
          node {
            name
            id
            image {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
