import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <h2 className="my-4 text-xl">Sorry, an unexcepted error has occured</h2>
      <h3 className="text-lg">{error.statusText || error.message}</h3>
    </div>
  );
};

export default ErrorPage;
