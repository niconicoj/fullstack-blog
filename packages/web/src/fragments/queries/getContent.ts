import { gql } from "apollo-boost";

export const contentQuery = gql`
query content($label: String!) {
  content(label: $label) {
    text
  }
}
`