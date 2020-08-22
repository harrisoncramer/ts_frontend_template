import gql from "graphql-tag";

export const GET_BOOKS = gql`
  query Books {
    books {
      title
      price
    }
  }
`;
