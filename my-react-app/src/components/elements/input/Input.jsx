const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, id, placeholder } = props;
  return (
    <input
      type={type}
      id={id}
      className="w-full px-3 py-2 text-sm text-black border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default Input;
