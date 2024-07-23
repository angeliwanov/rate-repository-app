import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";

import AppBar from "./AppBar";
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
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createrepo" element={<ReviewForm />} />
      </Routes>
    </View>
  );
};

export default Main;
