import { useApolloClient } from "@apollo/client";
import { Pressable, StyleSheet } from "react-native";
import useAuthStorage from "../hooks/useAuthStorage";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.secondary,
    padding: 10,
  },
});

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <Pressable onPress={signOut}>
      <Text fontWeight="bold" style={styles.text}>
        Sign out
      </Text>
    </Pressable>
  );
};

export default SignOut;
