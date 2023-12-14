const Button = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    type = "button",
    // eslint-disable-next-line react/prop-types
    variant = "bg-slate-500",
    // eslint-disable-next-line react/prop-types
    variant_ring = "ring-1",
    // eslint-disable-next-line react/prop-types
    variant_ring_1 = "",
    // eslint-disable-next-line react/prop-types
    text_1 = "",
    // eslint-disable-next-line react/prop-types
    text = "...",
    // eslint-disable-next-line react/prop-types
    wfull = "w-full",
    // eslint-disable-next-line react/prop-types
    mb = "mb-6",
    // eslint-disable-next-line react/prop-types
    onClick = () => {},
    // eslint-disable-next-line react/prop-types
    ml = "",
    // eslint-disable-next-line react/prop-types
    bg_hover = "",
    // eslint-disable-next-line react/prop-types
    text_non_hover = "text-white",
  } = props;
  return (
    <button
      type={type}
      className={`${wfull} h-10 px-6 font-semibold rounded-md ${variant} ${text_non_hover} hover:${bg_hover} hover:${variant} hover:${variant_ring} hover:${variant_ring_1} hover:${text_1} transition duration-700 ease-in-out ${mb} ${ml}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
