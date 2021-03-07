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
export const SIGNIN_USER = glq`
  mutation($username: String!, $password: String!){
    signinUser(username: $username, $password:$password){
      token
    }
  }
`;
export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
