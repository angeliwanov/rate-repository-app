import { Image, View } from "react-native";
import theme from "../theme";
import { numberFormatter } from "../utils";
import Text from "./Text";
const RepositoryItem = ({
  fullName,
  description,
  language,
  stars,
  forks,
  reviews,
  rating,
  image,
}) => {
  const styles = {
    container: {
      padding: 10,
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: 5,
      borderRadius: 5,
      width: 100,
    },
    buttonText: {
      textAlign: "center",
      color: theme.colors.secondary,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
    },
    rowGap: { gap: 20, marginBottom: 20 },
    bottomRow: {
      flex: 1,
      alignItems: "center",
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    content: {
      display: "flex",
      gap: 10,
      width: 250,
    },
  };

  return (
    <View style={styles.container}>
      <View style={[styles.flexRow, styles.rowGap]}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.content}>
          <Text fontWeight="bold">{fullName}</Text>
          <Text color="textSecondary">{description}</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexRow}>
        <View style={styles.bottomRow}>
          <Text fontWeight="bold">{numberFormatter(stars)}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text fontWeight="bold">{numberFormatter(forks)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text fontWeight="bold">{numberFormatter(reviews)}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text fontWeight="bold">{numberFormatter(rating)}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
