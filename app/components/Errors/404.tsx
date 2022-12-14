import { Link } from "@remix-run/react";

export default function NotFound({ status, statusText }) {
  return (
    <div className="min-w-screen min-h-screen text-primary-content flex items-center p-5 overflow-hidden relative">
      <div className="flex-1 min-h-full min-w-full relative md:flex items-center text-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="mb-4 ">
            <img
              className="w-[250px] border rounded-2xl shadow-lg"
              src={`/images/jtravolta.gif`}
            />
          </div>
          <div className="mb-4 font-light flex flex-col justify-center items-center">
            <h1 className="font-black uppercase text-3xl lg:text-5xl mb-4">
              {status}
            </h1>
            <p className="text-2xl">{statusText}</p>
            <p>Oh no, you've found a page that doesn't exist</p>
          </div>
          <Link to="/" className="btn btn-primary">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
