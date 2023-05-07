import Link from "next/link";
import React from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import {
  PlayIcon,
  ArrowTrendingUpIcon,
  UserIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Obstacles",
    description:
      "Concise and simple explanation of each stage's science, goals, and specific techniques relevant to goal.",
    icon: PlayIcon,
  },
  {
    name: "Techniques",
    description:
      "Longs and short Guided meditations, meditation timer, and journaling to help you cultivate your practice.",
    icon: ArrowTrendingUpIcon,
  },
];

// const features = [
//   {
//     name: "Push to deploy",
//     description:
//       "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: "SSL certificates",
//     description:
//       "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
//     icon: LockClosedIcon,
//   },
//   {
//     name: "Simple queues",
//     description:
//       "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
//     icon: ArrowPathIcon,
//   },
//   {
//     name: "Advanced security",
//     description:
//       "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
//     icon: FingerPrintIcon,
//   },
// ];

export default function Stage1() {
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <b>TMImeditation</b>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/stage1/theory"
              className="text-sm font-semibold leading-6 text-gray-900 pr-6"
            >
              Theory
            </Link>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 pr-6"
            >
              Practice
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 pr-6"
            >
              Mentoring
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Account
            </a>
          </div>
        </nav>
      </header>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Stage1
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Build a 20 mins regular and delegent meditation practice
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div> */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function Stage1() {
//   return (
//     <div>
//       <div className="navbar bg-base-100">
//         <div className="flex-1">
//           <a className="btn btn-ghost normal-case text-xl">TMI Meditation</a>
//         </div>
//         <div className="flex-none">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <Link href={"/stage1/theory"}>Theory</Link>
//             </li>
//             <li>
//               <Link href={"/stage1/practice"}>Practice</Link>
//             </li>
//             <li>
//               <Link href={"/stage1/mentoring"}>Mentoring</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content text-center">
//           <div className="max-w-md">
//             <h1 className="text-5xl font-bold">
//               Goal: Build a regular delegent practice.
//             </h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }
