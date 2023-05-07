"use client";
import Navbar from "@/app/components/navbar";
import React, { useEffect } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import SelectBox from "@/app/components/selectbox";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Practice() {
  const [timer, setTimer] = React.useState(100);
  useEffect(() => {
    setTimeout(() => {
      if (timer < 100) {
        setTimer(timer + 0.2);
      }
    }, 10);
  }, [timer]);
  console.log("timer", timer);
  return (
    // <div>
    //   <Navbar></Navbar>
    <>
      <Navbar></Navbar>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <div className="mt-6 text-lg leading-8 text-gray-600">
                  <SelectBox></SelectBox>
                </div>
                <div className="mt-6 text-lg leading-8 text-gray-600">
                  <SelectBox></SelectBox>
                </div>
                <div className="mt-6 text-lg leading-8 text-gray-600 text-algin-center">
                  <a
                    onClick={() => {
                      setTimer(0);
                    }}
                    className="cursor-pointer rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Get started
                  </a>
                </div>
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl> */}
              </div>
            </div>
            <div
              className="radial-progress text-orange-600 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
              style={{
                "--value": timer,
                "--size": "16rem",
                "--thickness": "2px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* 
    </div>
  );
} */
}
