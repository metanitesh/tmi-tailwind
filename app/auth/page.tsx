"use client";

import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { useAnalytics } from "@happykit/analytics";

export default function Auth() {
  useAnalytics({ publicKey: "analytics_pub_8cc6e8d314" });
  const [mode, setMode] = React.useState("signin");
  const [username, setUsername] = React.useState("test");
  const [password, setPassword] = React.useState("test");
  const [res, setRes] = React.useState("");

  const handleAuth = async (e: any) => {
    e.preventDefault();
    let url = "api/register";

    if (mode === "signin") {
      url = "api/login";
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const userResponse: { message: string } = await res.json();
    setRes(userResponse.message);
  };

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <header className="bg-white">
        <Navbar></Navbar>
      </header>

      <div className="bg-white py-10 sm:py-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-center text-orange-700 sm:text-2xl">
            {mode === "signup" ? "Sign up" : "Sign in"} to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mt-6 text-lg leading-2 text-gray-600"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className=" text-lg leading-2 text-gray-600"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-orange-600 hover:text-orange-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:text-orange-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                onClick={handleAuth}
              >
                {mode === "signup" ? "Sign up" : "Sign in"}
              </button>

              <h3 className="text-center text-orange-700 mt-4">{res}</h3>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-orange-600 hover:text-orange-500"
              onClick={() =>
                setMode((mode) => (mode === "signin" ? "signup" : "signin"))
              }
            >
              {mode === "signup" ? "Sign in" : "Sign Up"}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
