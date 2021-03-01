import { gql } from "apollo-boost";

/**
 * @Post Queries
 */

export const GET_POSTS = gql`
  query {
    getPost {
      title
      imageUrl
      description
    }
  }
`;

/**
 * @User Queries
 */

/**
 * @User Mutations
 */

/**
 * @Post Mutations
 */
