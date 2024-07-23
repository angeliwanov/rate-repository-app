import { useFormik } from "formik";
import { Pressable, TextInput, View } from "react-native";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import useCreateUser from "../hooks/useCreateUser";
import useSignIn from "../hooks/useSignIn";
import theme from "../theme";
import Text from "./Text";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must contain 5 or more characters.")
    .max(30, "Username must contain less than 30 characters.")
    .required("Username is required"),
  password: yup
    .string()

    .min(5, "Password much contain at least 3 characters.")
    .max(30, "Password must contain less than 30 characters.")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Password confirm is required"),
});

const SignUp = () => {
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values;
    try {
      const data = await createUser({ username, password });
      console.log(data);
      resetForm();
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
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
    errorPasswordConfirmation: {
      borderColor:
        formik.errors.passwordConfirmation &&
        formik.touched.passwordConfirmation
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
      <TextInput
        style={[styles.container, styles.errorPasswordConfirmation]}
        secureTextEntry="true"
        placeholder="Password confirmation"
        value={formik.values.passwordConfirmation}
        onChangeText={formik.handleChange("passwordConfirmation")}
      />
      <View>
        {formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation && (
            <Text style={styles.error}>
              {formik.errors.passwordConfirmation}
            </Text>
          )}
      </View>
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;
