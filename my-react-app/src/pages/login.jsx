import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Login Page"
      description="Welcome, Please Login Your Accounts!"
    >
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
