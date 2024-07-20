import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.secondary,
    padding: 10,
  },
});

const AppBarTab = ({ text, link }) => {
  return (
    <Pressable>
      <Link to={link}>
        <Text fontWeight="bold" style={styles.text}>
          {text}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
