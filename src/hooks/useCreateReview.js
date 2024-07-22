import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, text, rating }) => {
    const { data } = await mutate({
      variables: {
        review: {
          ownerName: ownerName,
          repositoryName: repositoryName,
          rating: Number(rating),
          text: text,
        },
      },
    });

    return data;
  };

  return [createReview, result];
};

export default useCreateReview;
