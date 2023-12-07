const AuthLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title, description } = props;
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="w-full max-w-xl px-5 py-5 bg-white rounded shadow-2xl md:max-w-md sm:max-w-sm">
        <h1 className="mb-2 text-3xl font-bold text-center text-blue-500">
          {title}
        </h1>
        <p className="mb-8 font-medium text-center text-blue-500">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
