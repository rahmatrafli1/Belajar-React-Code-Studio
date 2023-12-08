import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title, description, type } = props;
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="w-full max-w-xl px-5 py-5 bg-white border border-gray-200 rounded shadow-2xl md:max-w-md sm:max-w-sm">
        <h1 className="mb-2 text-3xl font-bold text-center text-blue-500">
          {title}
        </h1>
        <p className="mb-8 font-medium text-center text-blue-500">
          {description}
        </p>
        {children}
        <div className="flex justify-center">
          <div className="mr-1 text-sm text-gray-500">
            {type === "login"
              ? "Don't have your account?"
              : type === "register"
              ? "Already have your account?"
              : ""}
          </div>
          {type === "login" ? (
            <Link
              to="/register"
              className="text-sm font-bold text-blue-500 no-underline active:text-red-500"
            >
              Register Now
            </Link>
          ) : type === "register" ? (
            <Link
              to="/"
              className="text-sm font-bold text-blue-500 no-underline active:text-red-500"
            >
              Login Now
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
