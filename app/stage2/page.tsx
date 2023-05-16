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
    description:
      "Shorten the periods of mind-wandering and extend the periods of sustained attention to the meditation object.",
    icon: FlagIcon,
  },
  {
    name: "Obstacles",
    description: "Mind-wandering, monkey-mind, and impatience",
    icon: NoSymbolIcon,
  },
  {
    name: "Skills",
    description:
      "Positively reinforce aha moment when you realize you've been distracted.",
    icon: AcademicCapIcon,
  },

  {
    name: "Mastery",
    description:
      "You can sustain attention on the meditation object for minutes, while most periods of mind-wandering last only a few seconds.",
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
              Stage2
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-orange-700 sm:text-4xl">
              Interrupted attention and overcoming mind wandering
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stage Two involves the simple practice of keeping your attention
              on the breath. This is easier said than done. You will discover
              that attention is easily captured by a distraction, making you
              forget that you're supposed to be paying attention to the breath.
              Forgetting quickly leads to mind-wandering, which can last a few
              seconds, several minutes to the entire meditation session. In
              Stage Two, you only work with mind-wandering.
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
