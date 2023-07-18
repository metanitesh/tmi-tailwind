"use client";
import React, { useEffect, useState } from "react";

import {
  NoSymbolIcon,
  AcademicCapIcon,
  FlagIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/navbar";
import Modal from "../components/modal";
import VideosLink from "../components/videosLink";

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
      "Six-Point Preparation for Meditation. A Gradual Four-Step Transition to breathing. Counting breath",
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

export default function Stage1() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
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
              Stage1
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-orange-700 sm:text-4xl">
              Establishing a practice
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The goal for Stage One is to developing a consistent and diligent
              meditation practice. Being consistent means setting a clear daily
              schedule for when you are going meditate, and sticking to it.
              Diligence means engaging wholeheartedly in the practice rather
              than spending your time on the cushion planning or daydreaming.
            </p>
            <p className="pt-6">
              <VideosLink
                isInterlude={true}
                isExplanation={true}
                isMeditation={true}
                setOpen={setOpen}
                setUrl={setUrl}
                interludeUrl="https://www.youtube.com/embed/a2Hi80hGV04"
                explanationUrl="https://www.youtube.com/embed/qPVqe4qjkms"
                meditationUrl="https://www.youtube.com/embed/V4neg7SVDKc"
              />
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
