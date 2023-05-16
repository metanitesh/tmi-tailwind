import Link from "next/link";
import React from "react";

import {
  NoSymbolIcon,
  AcademicCapIcon,
  MapIcon,
  FlagIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/navbar";

const features = [
  {
    name: "Goal",
    description: "Develop a regular meditation practice.",
    icon: FlagIcon,
  },
  {
    name: "Obstacles",
    description:
      "Resistance, procrastination, fatigue, impatience, boredom, lack of motivation.",
    icon: NoSymbolIcon,
  },
  {
    name: "Skills",
    description:
      "Creating practice routines, setting specific practice goals, generating strong motivation, cultivating discipline and diligence.",
    icon: AcademicCapIcon,
  },
  // {
  //   name: "Techniques",
  //   description:
  //     "Six-Point Preparation for Meditation, A Gradual Four-Step Transition to the Meditation Object",
  //   icon: MapIcon,
  // },
  {
    name: "Mastery",
    description: "Never missing a daily practice session",
    icon: TrophyIcon,
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
        <Navbar></Navbar>
      </header>
      <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">
              Stage1
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-orange-700 sm:text-4xl">
              Establishing a practice
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This Stage is about developing a consistent and diligent
              meditation practice. Being consistent means setting a clear daily
              schedule for when you are going meditate, and sticking to it.
              Diligence means engaging wholeheartedly in the practice rather
              than spending your time on the cushion planning or daydreaming.
            </p>
            {/* <p className="pt-6">
              <Link
                href="/stage1/theory"
                className="bg-orange-600 hover:bg-orange-600 text-white py-2 px-4 rounded mr-4"
              >
                Theory
              </Link>
              <Link
                href="/stage1/theory"
                className="bg-orange-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Practice
              </Link>
              <Link
                href="/stage1/theory"
                className="bg-orange-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Mentoring
              </Link>
            </p> */}
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
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <feature.icon
                        className="h-6 w-6 text-orange-600 font-bold"
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
