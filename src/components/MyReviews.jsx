import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";
import { GET_USER } from "../graphql/queries";
import ItemSeparator from "./ItemSeparator";
import Loader from "./Loader";
import ReviewItem from "./ReviewItem";

const MyReviews = () => {
  const { data, loading, refetch } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Loader />;

  const reviewNodes = data
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => {
        return (
          <ReviewItem
            review={item}
            name={item.repository.fullName}
            repo={true}
            refetch={refetch}
          />
        );
      }}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={<ItemSeparator />}
    />
  );
};

export default MyReviews;
