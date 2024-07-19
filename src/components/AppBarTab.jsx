import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.secondary,
    padding: 10,
  },
});

const AppBarTab = () => {
  return (
    <Pressable>
      <Text fontWeight="bold" style={styles.text}>
        Repositories
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
