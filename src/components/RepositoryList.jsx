import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import RepositoryListContainer from "./RepositoryListContainer";

// const repositories = [
//   {
//     id: "jaredpalmer.formik",
//     fullName: "jaredpalmer/formik",
//     description: "Build forms in React, without the tears",
//     language: "TypeScript",
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
//   },
//   {
//     id: "rails.rails",
//     fullName: "rails/rails",
//     description: "Ruby on Rails",
//     language: "Ruby",
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
//   },
//   {
//     id: "django.django",
//     fullName: "django/django",
//     description: "The Web framework for perfectionists with deadlines.",
//     language: "Python",
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
//   },
//   {
//     id: "reduxjs.redux",
//     fullName: "reduxjs/redux",
//     description: "Predictable state container for JavaScript apps",
//     language: "TypeScript",
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
//   },
// ];

const RepositoryList = () => {
  // const { repositories, loading } = useRepositories();
  const [selector, setSelector] = useState("latest added");

  const orderBy = selector === "latest added" ? "CREATED_AT" : "RATING_AVERAGE";
  const orderDirection =
    selector === "highest rated"
      ? "DESC"
      : selector === "lowest rated"
      ? "ASC"
      : "DESC";

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: "cache-and-network",
  });

  if (loading || error) return null;

  return (
    <RepositoryListContainer
      selector={selector}
      setSelector={setSelector}
      repositories={data.repositories}
    />
  );
};

export default RepositoryList;
