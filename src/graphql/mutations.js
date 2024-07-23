import { gql } from "@apollo/client";
import { REPO_DETAILS } from "./fragments";

export const SIGN_IN = gql`
  mutation ($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      createdAt
      id
      rating
      userId
      user {
        id
        username
      }
      repository {
        ...RepoDetails
      }
      repositoryId
      text
    }
  }
  ${REPO_DETAILS}
`;

export const CREATE_USER = gql`
  mutation ($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`;
