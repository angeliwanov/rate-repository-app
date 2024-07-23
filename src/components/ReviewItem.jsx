import { Pressable, View } from "react-native";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";
import theme from "../theme";
import { formatDate } from "../utils";
import Text from "./Text";

const ReviewItem = ({ review, name, repo, refetch }) => {
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
      paddingHorizontal: review.rating < 10 ? 14 : review.rating < 100 ? 9 : 5,
      borderRadius: 20,
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    button: {
      paddingHorizontal: 15,
      paddingVertical: 15,
      margin: 5,
      borderRadius: 5,
      width: 160,
    },
    buttonRepo: {
      backgroundColor: theme.colors.primary,
    },
    buttonDelete: {
      backgroundColor: theme.colors.error,
    },
    buttonText: {
      color: theme.colors.secondary,
      textAlign: "center",
    },
  };

  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const onDelete = async () => {
    try {
      await deleteReview(review.id);
      refetch();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text fontWeight="bold" style={styles.rating}>
            {review.rating}
          </Text>
        </View>
        <View style={styles.flex}>
          <Text fontWeight="bold">{name}</Text>
          <Text color="textSecondary">{formatDate(review.createdAt)}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {repo && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.buttonRepo]}
            onPress={() => {
              navigate(`/${review.repository.id}`);
            }}
          >
            <Text fontWeight="bold" style={styles.buttonText}>
              View repository
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonDelete]}
            onPress={onDelete}
          >
            <Text fontWeight="bold" style={styles.buttonText}>
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
