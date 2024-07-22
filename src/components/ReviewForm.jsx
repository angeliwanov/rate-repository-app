import { useFormik } from "formik";
import { Pressable, TextInput, View } from "react-native";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import theme from "../theme";
import Text from "./Text";

const initialValues = {
  owner: "",
  repository: "",
  rating: 0,
  review: "",
};
const validationSchema = yup.object().shape({
  owner: yup
    .string()
    .min(3, "Owner name must contain 3 or more characters.")
    .required("Owner name is required."),
  repository: yup
    .string()
    .min(3, "Repository name must contain 3 or more characters.")
    .required("Repository name is required."),
  rating: yup
    .number()
    .min(0, "Rating must be greater than 0.")
    .max(100, "Rating must be less than 100.")
    .required("Rating is required."),
  review: yup.string(),
});

const ReviewForm = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  const onSubmit = async (values, { resetForm }) => {
    const {
      owner: ownerName,
      repository: repositoryName,
      review: text,
      rating,
    } = values;

    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        text,
        rating,
      });
      resetForm();
      console.log(data);
      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const styles = {
    container: {
      borderColor: theme.colors.textSecondary,
      borderStyle: "solid",
      borderWidth: "1px",
      padding: 10,
      margin: 5,
      borderRadius: 5,
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: 10,
      margin: 5,
      borderRadius: 5,
    },
    buttonText: {
      color: theme.colors.secondary,
      textAlign: "center",
    },
    error: {
      height: 15,
      paddingLeft: 10,
      color: theme.colors.error,
    },
    errorOwner: {
      borderColor:
        formik.errors.owner && formik.touched.owner
          ? theme.colors.error
          : theme.colors.textSecondary,
    },
    errorRepository: {
      borderColor:
        formik.errors.repository && formik.touched.repository
          ? theme.colors.error
          : theme.colors.textSecondary,
    },
    errorRating: {
      borderColor:
        formik.errors.rating && formik.touched.rating
          ? theme.colors.error
          : theme.colors.textSecondary,
    },
    errorReview: {
      borderColor:
        formik.errors.review && formik.touched.review
          ? theme.colors.error
          : theme.colors.textSecondary,
    },
  };

  return (
    <View>
      <TextInput
        style={[styles.container, styles.errorOwner]}
        placeholder="Owner"
        value={formik.values.owner}
        onChangeText={formik.handleChange("owner")}
      />
      <View>
        {formik.touched.owner && formik.errors.owner && (
          <Text style={styles.error}>{formik.errors.owner}</Text>
        )}
      </View>
      <TextInput
        style={[styles.container, styles.errorRepository]}
        placeholder="Repository"
        value={formik.values.repository}
        onChangeText={formik.handleChange("repository")}
      />
      <View>
        {formik.touched.repository && formik.errors.repository && (
          <Text style={styles.error}>{formik.errors.repository}</Text>
        )}
      </View>
      <TextInput
        style={[styles.container, styles.errorRating]}
        placeholder="Rating"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
      />
      <View>
        {formik.touched.rating && formik.errors.rating && (
          <Text style={styles.error}>{formik.errors.rating}</Text>
        )}
      </View>
      <TextInput
        style={[styles.container, styles.errorReview]}
        placeholder="Review"
        value={formik.values.review}
        onChangeText={formik.handleChange("review")}
      />
      <View>
        {formik.touched.review && formik.errors.review && (
          <Text style={styles.error}>{formik.errors.review}</Text>
        )}
      </View>
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
