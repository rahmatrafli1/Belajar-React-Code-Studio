import Button from "../elements/Button";
import InputForm from "../elements/input";

const FormRegister = () => {
  return (
    <form>
      <InputForm
        htmlFor="name"
        title="Full Name"
        type="text"
        id="name"
        placeholder="Insert your Name...."
      />
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
      <InputForm
        htmlFor="rpassword"
        title="Repeat Password"
        type="password"
        id="rpassword"
        placeholder="******"
      />
      <Button
        type="button"
        variant="bg-green-800"
        text="Register"
        variant_ring_1="ring-green-800"
        text_1="text-green-800"
      />
    </form>
  );
};

export default FormRegister;
