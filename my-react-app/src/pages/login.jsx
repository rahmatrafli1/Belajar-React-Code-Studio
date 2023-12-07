import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";
import AuthLink from "../components/fragments/AuthLink";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Login Page"
      description="Welcome, Please Login Your Accounts!"
    >
      <FormLogin />
      <AuthLink
        textNolinkTitle="Don't have your account?"
        textLink="/register"
        textNoLink="Register Now"
      />
    </AuthLayout>
  );
};

export default LoginPage;
