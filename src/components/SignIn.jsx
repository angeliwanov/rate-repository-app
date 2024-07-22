import { useNavigate } from "react-router-dom";
import useSignIn from "../hooks/useSignIn";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values;
    try {
      const data = await signIn({ username, password });
      console.log(data);
      resetForm();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
