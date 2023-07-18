"use client";
import React from "react";

import {
  NoSymbolIcon,
  AcademicCapIcon,
  FlagIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/navbar";
import VideosLink from "../components/videosLink";
import Modal from "../components/modal";

const features = [
  {
    name: "Goal",
    description:
      "To overcome subtle dullness and increase the power of mindfulness.",
    icon: FlagIcon,
  },
  {
    name: "Obstacles",
    description:
      "Subtle dullness is difficult to recognize, creates an illusion of stable attention, and is seductively pleasant.",
    icon: NoSymbolIcon,
  },
  {
    name: "Skills",
    description:
      "Cultivating even stronger and more continuous introspective awareness to detect and correct for subtle dullness. Learning a new body- scanning technique to help you increase the power of your mindfulness.",
    icon: AcademicCapIcon,
  },

  {
    name: "Mastery",
    description:
      " You can sustain or even increase the power of your mindfulness during each meditation session.",
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
              Stage5
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-orange-700 sm:text-4xl">
              Overcome subtle dullness
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              You have overcome gross distractions and strong dullness, but
              there is a tendency to slip into stable subtle dullness. This
              makes the breath sensations less vivid and causes peripheral
              awareness to fade. Unrecognized, subtle dullness can lead you to
              overestimate your abilities and move on to the next Stage
              prematurely, which leads to concentration with dullness. You will
              experience only a shallow facsimile of the later Stages, and your
              practice will come to a dead end. To overcome subtle dullness, you
              must sharpen your faculties of attention and awareness.
            </p>
            <p className="pt-6">
              <VideosLink
                isExplanation={true}
                explanationUrl="https://www.youtube.com/embed/F90FXRtx2JA"
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
