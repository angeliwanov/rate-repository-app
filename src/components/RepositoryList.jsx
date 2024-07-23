import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-native";
import { useDebounce } from "use-debounce";
import { GET_REPOSITORIES } from "../graphql/queries";
import Loader from "./Loader";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const navigate = useNavigate();
  const [selector, setSelector] = useState("latest added");
  const [searchQuery, setSearchQuery] = useState("");
  const [repositoriesSearchKeyword2] = useDebounce(searchQuery, 500);

  const orderBy = selector === "latest added" ? "CREATED_AT" : "RATING_AVERAGE";
  const orderDirection =
    selector === "highest rated"
      ? "DESC"
      : selector === "lowest rated"
      ? "ASC"
      : "DESC";

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy,
      orderDirection,
      repositoriesSearchKeyword2,
    },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Loader />;

  return (
    <RepositoryListContainer
      navigate={navigate}
      selector={selector}
      setSelector={setSelector}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      repositories={data.repositories}
    />
  );
};

export default RepositoryList;
