const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, variant = "bg-slate-500", text = "..." } = props;
  return (
    <button
      type={type}
      className={`w-full h-10 px-6 font-semibold rounded-md ${variant} text-white hover:bg-white hover:border-green-800 hover:ring-1 hover:ring-green-800 hover:text-green-800 transition duration-700 ease-in-out mb-6`}
    >
      {text}
    </button>
  );
};

export default Button;
