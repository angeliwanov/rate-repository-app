import { useQuery } from "@apollo/client";
import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";
import { GET_USER } from "../graphql/queries";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import Loader from "./Loader";
import SignOut from "./SignOut";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    backgroundColor: theme.backgroundColors.primary,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { data: user, loading } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />
        {user?.me && <AppBarTab text="Create a review" link="/create-review" />}
        {user?.me && <AppBarTab text="My reviews" link="/my-reviews" />}

        {!user?.me && <AppBarTab text="Sign in" link="/signin" />}
        {!user?.me && <AppBarTab text="Sign up" link="/signup" />}
        {user?.me && <SignOut />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
