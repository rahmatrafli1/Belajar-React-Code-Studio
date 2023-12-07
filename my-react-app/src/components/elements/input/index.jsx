import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { htmlFor, title, type, id, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor} title={title} />
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
