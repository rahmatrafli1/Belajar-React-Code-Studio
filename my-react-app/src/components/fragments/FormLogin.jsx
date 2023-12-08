import Button from "../elements/Button";
import InputForm from "../elements/input";

const FormLogin = () => {
  return (
    <form>
      <InputForm
        htmlFor="email"
        title="Email"
        type="email"
        id="email"
        placeholder="example@mail.com"
      />
      <InputForm
        htmlFor="password"
        title="Password"
        type="password"
        id="password"
        placeholder="******"
      />
      <Button
        type="button"
        variant="bg-green-800"
        text="Login"
        variant_ring_1="ring-green-800"
        text_1="text-green-800"
      />
    </form>
  );
};

export default FormLogin;
