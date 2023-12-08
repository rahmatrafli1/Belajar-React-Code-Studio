import { Link } from "react-router-dom";
import Button from "../elements/Button";

const CardProducts = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <div className="flex flex-col justify-between w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
};

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { url, alter } = props;
  return (
    <Link to="#">
      <img className="p-8 rounded-lg" src={url} alt={alter} />
    </Link>
  );
};

const Body = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title } = props;
  return (
    <div className="h-full px-5 pb-5">
      <Link to="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-sm text-white">{children}</p>
      </Link>
    </div>
  );
};

const Footer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-2xl font-bold text-white">{price}</span>
      <Button
        type="button"
        variant="bg-green-800"
        text="Add to Cart"
        variant_ring_1="ring-green-800"
        text_1="text-green-800"
        wfull=""
        mb=""
      />
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
