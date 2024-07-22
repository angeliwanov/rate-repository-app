import * as Linking from "expo-linking";
import { Pressable, View } from "react-native";
import theme from "../theme";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const RepositoryInfo = ({ repository }) => {
  const styles = {
    container: {
      padding: 10,
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: 10,
      margin: 5,
      borderRadius: 5,
    },
    buttonText: {
      color: theme.colors.secondary,
      textAlign: "center",
    },
  };

  return (
    <View style={styles.container}>
      <RepositoryItem
        fullName={repository.fullName}
        description={repository.description}
        language={repository.language}
        stars={repository.stargazersCount}
        forks={repository.forksCount}
        reviews={repository.reviewCount}
        rating={repository.ratingAverage}
        image={repository.ownerAvatarUrl}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          Linking.openURL(repository.url);
        }}
      >
        <Text fontWeight="bold" style={styles.buttonText}>
          Open in GitHub
        </Text>
      </Pressable>
    </View>
  );
};

export default RepositoryInfo;
