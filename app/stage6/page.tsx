"use client";
import React from "react";

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
    description:
      "To subdue subtle distractions and develop metacognitive introspective awareness. ",
    icon: FlagIcon,
  },
  {
    name: "Obstacles",
    description:
      "The tendency for attention to alternate to the continuous stream of distracting thoughts and other mental objects in peripheral awareness.",
    icon: NoSymbolIcon,
  },
  {
    name: "Skills",
    description:
      "Defining your scope of attention more precisely than before, and ignoring everything outside that scope until subtle distractions fade away. Developing a much more refined and selective awareness of the mind itself, called metacognitive introspective awareness. You will also use a method called “experiencing the whole body with the breath” to further subdue potential distractions.",
    icon: AcademicCapIcon,
  },

  {
    name: "Mastery",
    description:
      "Subtle distractions have almost entirely disappeared, and you have unwavering exclusive attention together with vivid mindfulness.",
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
              Stage6
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-orange-700 sm:text-4xl">
              Overcome subtle distraction
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Attention is fairly stable but still alternates between the
              meditation object and subtle distractions in the background.
              You’re now ready to bring your faculty of attention to a whole new
              level where subtle distractions fall away completely. You will
              achieve exclusive attention to the meditation object, also called
              single- pointed attention.
            </p>
            <p className="pt-6">
              <VideosLink
                isExplanation={true}
                explanationUrl="https://www.youtube.com/embed/Ls9lr6Qv6jQ"
                setOpen={setOpen}
                setUrl={setUrl}
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
