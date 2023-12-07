const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { variant = "bg-slate-500", text = "..." } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
