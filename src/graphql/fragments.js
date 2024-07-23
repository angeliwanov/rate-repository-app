import { gql } from "@apollo/client";

export const REPO_DETAILS = gql`
  fragment RepoDetails on Repository {
    id
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
  }
`;

export const REVEIW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
    repositoryId
    repository {
      ...RepoDetails
    }
  }
  ${REPO_DETAILS}
`;
