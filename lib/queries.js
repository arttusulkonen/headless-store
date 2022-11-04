import { gql } from '@apollo/client';

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
        }
      }
    }
  }
`;
