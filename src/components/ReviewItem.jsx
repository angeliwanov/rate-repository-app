import { View } from "react-native";
import { formatDate } from "../utils";
import Text from "./Text";

const ReviewItem = ({ review }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      gap: 15,
      padding: 10,
      width: 300,
    },
    flex: { display: "flex", gap: 5 },
    rating: {
      alignSelf: "center",
      width: 40,
      height: 40,

      color: "#205ea0",
      borderColor: "#205ea0",
      borderWidth: "2px",
      borderStyle: "solid",
      paddingVertical: 9,
      paddingHorizontal: review.rating < 100 ? 9 : 5,
      borderRadius: 20,
    },
  };

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text fontWeight="bold" style={styles.rating}>
          {review.rating}
        </Text>
      </View>
      <View style={styles.flex}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text color="textSecondary">{formatDate(review.createdAt)}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
