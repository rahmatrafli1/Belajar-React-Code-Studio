import { Link } from "react-router-dom";

const AuthLink = (props) => {
  // eslint-disable-next-line react/prop-types
  const { textNolinkTitle, textLink, textNoLink } = props;
  return (
    <div className="flex justify-center">
      <div className="mr-1 text-sm">{textNolinkTitle}</div>
      <Link
        to={textLink}
        className="text-sm font-bold text-blue-500 no-underline active:text-red-500"
      >
        {textNoLink}
      </Link>
    </div>
  );
};

export default AuthLink;
