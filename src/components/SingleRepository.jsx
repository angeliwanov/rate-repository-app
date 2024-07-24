import { useQuery } from "@apollo/client";
import { FlatList, View } from "react-native";
import { useParams } from "react-router-dom";
import { GET_GITHUB_URL } from "../graphql/queries";
import useReviews from "../hooks/useReviews";
import ItemSeparator from "./ItemSeparator";
import Loader from "./Loader";
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";

const SingleRepository = () => {
  const { id } = useParams();

  const {
    reviews,
    fetchMore,
    loading: loadingReviews,
  } = useReviews({
    first: 2,
    repositoryId: id,
  });

  const onEndReach = () => {
    fetchMore();
  };

  const { data: repository, loading: loadingRepository } = useQuery(
    GET_GITHUB_URL,
    { variables: { repositoryId: id } }
  );

  if (loadingReviews || loadingRepository) return <Loader />;

  const reviewNodes = reviews ? reviews?.edges?.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => {
        return (
          <ReviewItem review={item} name={item.user.username} repo={false} />
        );
      }}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={<ItemSeparator />}
      onEndReached={onEndReach}
      ListHeaderComponent={() => (
        <View>
          <RepositoryInfo repository={repository.repository} />
          <ItemSeparator />
        </View>
      )}
    />
  );
};

export default SingleRepository;
