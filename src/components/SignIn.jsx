import SignInForm from "./SignInForm";

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
