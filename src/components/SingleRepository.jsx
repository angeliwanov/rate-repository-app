import { useQuery } from "@apollo/client";
import { FlatList, View } from "react-native";
import { useParams } from "react-router-dom";
import { GET_GITHUB_URL, GET_REPO_REVIEWS } from "../graphql/queries";
import ItemSeparator from "./ItemSeparator";
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";

const SingleRepository = () => {
  const { id } = useParams();

  const { data: reviews, loading: loadingReviews } = useQuery(
    GET_REPO_REVIEWS,
    {
      variables: { repositoryId: id },
    }
  );

  const { data: repository, loading: loadingRepository } = useQuery(
    GET_GITHUB_URL,
    { variables: { repositoryId: id } }
  );

  if (loadingReviews || loadingRepository) return null;

  const reviewNodes = reviews
    ? reviews.repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => {
        console.log(item);
        return <ReviewItem review={item} />;
      }}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={<ItemSeparator />}
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
