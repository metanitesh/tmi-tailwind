'use client'
import Link from "next/link";
import React from "react";

import {
  NoSymbolIcon,
  AcademicCapIcon,
  FlagIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/navbar";
import Modal from "../components/modal";

const features = [
  {
    name: "Goal",
    description: "Overcome forgetting and falling asleep.",
    icon: FlagIcon,
  },
  {
    name: "Obstacles",
    description: "Distractions, forgetting, mind-wandering, and sleepiness.",
    icon: NoSymbolIcon,
  },
  {
    name: "Skills",
    description:
      "Following the breath, connecting the breath, labeling and checking in.",
    icon: AcademicCapIcon,
  },

  {
    name: "Mastery",
    description: "Rarely forgetting the breath or falling asleep.",
    icon: TrophyIcon,
  },
];

export default function Stage2() {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState("");

  return (
    
    <>
      <header className="bg-white">
        <Navbar></Navbar>
      </header>
      <Modal open={open} setOpen={setOpen} url={url} />
      <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">
              Stage3
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-orange-700 sm:text-4xl">
              Overcome forgetting
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The goal for Stage Three is to overcome forgetting and falling
              asleep, cultivate the faculty of mindfulness to detect distraction
              and dullness, and make corrections as soon as you notice their
              presence. once it becomes a habit you will rarely forget the
              breath.
            </p>
            <p className="pt-6">
              
              <button
                className="bg-orange-600 hover:bg-orange-600 text-white py-2 px-4 rounded mr-4"
                onClick={() => {
                  setUrl("https://www.youtube.com/embed/a2Hi80hGV04");
                  setOpen(true);
                }}
              >
                Interlude
              </button>
              <button
                className="bg-orange-600 hover:bg-orange-600 text-white py-2 px-4 rounded mr-4"
                onClick={() => {
                  setUrl("https://www.youtube.com/embed/qPVqe4qjkms");
                  setOpen(true);
                }}
              >
                Explanation
              </button>
              <button
                className="bg-orange-600 hover:bg-orange-600 text-white py-2 px-4 rounded mr-4"
                onClick={() => {
                  setUrl("https://www.youtube.com/embed/V4neg7SVDKc");
                  setOpen(true);
                }}
              >
                Guided Meditation
              </button>
            
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
