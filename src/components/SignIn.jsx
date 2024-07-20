import useSignIn from "../hooks/useSignIn";
import AuthStorage from "../utils/authStorage";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      const userToken = new AuthStorage(username);
      await userToken.setAccessToken(data.authenticate.accessToken);
      console.log(await userToken.getAccessToken());
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
