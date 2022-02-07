import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          {/* <Image
            src="https://source.unsplash.com/random"
            alt=""
            className="w-full h-full object-cover"
            width="100%"
            height="100%"
          /> */}
        </div>
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Sign Up
            </h1>
            {/* {error && 
              <div
                className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700"
                role="alert"
              >
                {error}
              </div>
            } */}
            <form
              action="#"
              className="mt-6"
              method="POST"
              //   onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name
                  id
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete
                  //   required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name
                  id
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  //   required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-8">
              Already have a account{" "}
              <Link href="/login">
                <a className="text-blue-500 hover:text-blue-700 font-semibold">
                  Login
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
