const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, variant = "bg-slate-500", text = "..." } = props;
  return (
    <button
      type={type}
      className={`w-full h-10 px-6 font-semibold rounded-md ${variant} text-white hover:bg-white hover:text-green-800 transition duration-700 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default Button;
