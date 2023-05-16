import Link from "next/link";
import React from "react";

import {
  NoSymbolIcon,
  AcademicCapIcon,
  FlagIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/navbar";

const features = [
  {
    name: "Goal",
    description: "Overcome forgetting and falling asleep",
    icon: FlagIcon,
  },
  {
    name: "Obstacles",
    description: "Distractions, forgetting, mind-wandering, and sleepiness",
    icon: NoSymbolIcon,
  },
  {
    name: "Skills",
    description:
      "Use the techniques of following the breath and connecting to extend the periods of uninterrupted attention, practices of labeling and checking in to stop forgetting",
    icon: AcademicCapIcon,
  },

  {
    name: "Mastery",
    description: "Rarely forgetting the breath or falling asleep.",
    icon: TrophyIcon,
  },
];

export default function Stage2() {
  return (
    <>
      <header className="bg-white">
        <Navbar></Navbar>
      </header>
      <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">
              Stage3
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-orange-700 sm:text-4xl">
              Extended attention and overcoming forgetting
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stages Two and Three are similar, but mind-wandering gets shorter
              and shorter until it stops altogether. The biggest challenge
              during this Stage is forgetting, but sleepiness often becomes a
              problem as well.
            </p>
          </div>

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
