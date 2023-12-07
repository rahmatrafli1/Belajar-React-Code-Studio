import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Register Page"
      description="Welcome, Please Register Your Accounts!"
    >
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
