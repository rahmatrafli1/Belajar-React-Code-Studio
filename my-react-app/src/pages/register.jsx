import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayout";
import AuthLink from "../components/fragments/AuthLink";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Register Page"
      description="Welcome, Please Register Your Accounts!"
    >
      <FormRegister />
      <AuthLink
        textNolinkTitle="Already have your account?"
        textLink="/"
        textNoLink="Login Now"
      />
    </AuthLayout>
  );
};

export default RegisterPage;
