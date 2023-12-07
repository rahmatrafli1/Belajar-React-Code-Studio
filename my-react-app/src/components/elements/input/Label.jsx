const Label = (props) => {
  // eslint-disable-next-line react/prop-types
  const { htmlFor, title } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-bold text-blue-500 "
    >
      {title}
    </label>
  );
};

export default Label;
