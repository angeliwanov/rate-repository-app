import { useQuery } from "@apollo/client";
import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";
import { GET_USER } from "../graphql/queries";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import SignOut from "./SignOut";
import Text from "./Text";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    backgroundColor: theme.backgroundColors.bar,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { data: user, loading } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />

        {!user?.me && <AppBarTab text="Sign-in" link="/signin" />}
        {user?.me && <SignOut />}
        {user?.me && (
          <Text
            fontWeight="bold"
            style={{ paddingTop: 10, color: theme.colors.secondary }}
          >
            {user?.me.username} logged in
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
