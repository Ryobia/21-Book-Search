import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
        bookCount
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors: [String]!, $description: String!, $bookId: ID!, $title: String!, $link: String!, $image: String!) {
      saveBook(authors: [$authors], description: $description, bookId: bookId, title: $title, link: $link, image: $image) {
        username
        email
        _id
        bookCount
        savedBooks {
          description
          authors
        }
      }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
      removeBook(bookId: $bookId) {
          bookCount
          savedBooks {
              title
              description
              link
              image
              bookId
          }
      }
  }
`;
