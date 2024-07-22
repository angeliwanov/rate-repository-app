import { gql } from "@apollo/client";
import { REPO_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepoDetails
        }
      }
    }
  }
  ${REPO_DETAILS}
`;

export const GET_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const GET_GITHUB_URL = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepoDetails
      url
    }
  }
  ${REPO_DETAILS}
`;

export const GET_REPO_REVIEWS = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
