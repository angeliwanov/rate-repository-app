import { StyleSheet, View } from "react-native";
import theme from "../theme";

const ItemSeparator = () => {
  const styles = StyleSheet.create({
    separator: {
      height: 10,
      backgroundColor: theme.backgroundColors.secondary,
    },
  });

  return <View style={styles.separator} />;
};

export default ItemSeparator;
