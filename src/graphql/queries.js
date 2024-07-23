import { gql } from "@apollo/client";
import { REPO_DETAILS, REVEIW_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $repositoriesSearchKeyword2: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $repositoriesSearchKeyword2
    ) {
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
  query getCurrentUser($includeReviews: Boolean = true) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
  ${REVEIW_DETAILS}
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
            ...ReviewDetails
          }
        }
      }
    }
  }
  ${REVEIW_DETAILS}
`;
