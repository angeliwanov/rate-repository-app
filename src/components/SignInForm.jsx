import { useFormik } from "formik";
import { Pressable, TextInput, View } from "react-native";
import * as yup from "yup";
import theme from "../theme";
import Text from "./Text";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must contain 3 or more characters.")
    .required("Username is required"),
  password: yup
    .string()
    .min(3, "Password much contain at least 3 characters.")
    .required("Password is required"),
});

const SignInForm = ({ onSubmit }) => {
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
    errorUsername: {
      borderColor:
        formik.errors.username && formik.touched.username
          ? theme.colors.error
          : theme.colors.textSecondary,
    },
    errorPassword: {
      borderColor:
        formik.errors.password && formik.touched.password
          ? theme.colors.error
          : theme.colors.textSecondary,
    },
  };

  return (
    <View>
      <TextInput
        style={[styles.container, styles.errorUsername]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      <View>
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.error}>{formik.errors.username}</Text>
        )}
      </View>
      <TextInput
        style={[styles.container, styles.errorPassword]}
        secureTextEntry="true"
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      <View>
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}
      </View>
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign-in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
