import { useState } from "react";
import { useNavigate } from "react-router-native";
import { useDebounce } from "use-debounce";
import useRepositories from "../hooks/useRepositories";
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

  const { repositories, fetchMore, loading } = useRepositories({
    first: 3,
    orderBy,
    orderDirection,
    repositoriesSearchKeyword2,
  });

  const onEndReach = () => {
    fetchMore();
  };

  if (loading) return <Loader />;

  return (
    <RepositoryListContainer
      navigate={navigate}
      selector={selector}
      setSelector={setSelector}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      repositories={repositories}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
