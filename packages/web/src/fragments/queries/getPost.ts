import { gql } from "apollo-boost";

export const postQuery = gql`
query Post($id: String!) {
  post(postId: $id) {
    createdAt
    title {
      text
    }
    body {
      id
      text
    }
  }
}
`