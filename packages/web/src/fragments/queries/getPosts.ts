import gql from "graphql-tag";

export const postsQuery = gql`
  query Posts($page: Float!) {
    posts(page: $page) {
      posts {
        id
        createdAt
        title {
          text
        }
      }
    }
  }
`