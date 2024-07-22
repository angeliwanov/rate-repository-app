import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();

    return data;
  };

  return [signIn, result];
};

export default useSignIn;

const d = {
  createReview: {
    __typename: "Review",
    createdAt: "2024-07-22T21:11:53.178Z",
    id: "bbe42984-051b-4a01-b45d-b8d29c32200c.zeit.next.js",
    rating: 12,
    repository: {
      __typename: "Repository",
      description: "The React Framework",
      forksCount: 26322,
      fullName: "zeit/next.js",
      id: "zeit.next.js",
      language: "JavaScript",
      ownerAvatarUrl: "https://avatars.githubusercontent.com/u/14985020?v=4",
      ratingAverage: 40,
      reviewCount: 2,
      stargazersCount: 123376,
    },
    repositoryId: "zeit.next.js",
    text: "Bads",
    user: {
      __typename: "User",
      id: "bbe42984-051b-4a01-b45d-b8d29c32200c",
      username: "kalle",
    },
    userId: "bbe42984-051b-4a01-b45d-b8d29c32200c",
  },
};

console.log(d.createReview.repositoryId);
