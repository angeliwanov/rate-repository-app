import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";

import AppBar from "./AppBar";
import MyReviews from "./MyReviews";
import RepositoryList from "./RepositoryList";
import ReviewForm from "./ReviewForm";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SingleRepository from "./SingleRepository";
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/:id" element={<SingleRepository />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-review" element={<ReviewForm />} />
        <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
