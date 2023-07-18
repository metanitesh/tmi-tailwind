"use client";
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
import VideosLink from "../components/videosLink";

const features = [
  {
    name: "Goal",
    description: "Overcome gross distraction and strong dullness.",
    icon: FlagIcon,
  },
  {
    name: "Obstacles",
    description:
      "Distractions, pain and discomfort, intellectual insights, emotionally charged visions and memories.",
    icon: NoSymbolIcon,
  },
  {
    name: "Skills",
    description:
      "Developing continuous introspective awareness allows you to make corrections before subtle distractions become gross distractions, and before subtle dullness becomes strong dullness. Learning to work with pain. Purifying the mind of past trauma and unwholesome conditioning",
    icon: AcademicCapIcon,
  },

  {
    name: "Mastery",
    description:
      "Gross distractions no longer push the breath into the background, and breath sensations don’t fade or become distorted due to strong dullness.",
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
              Stage4
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-orange-700 sm:text-4xl">
              Overcome gross distraction and strong dullness
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              You can stay focused on the breath more or less continuously, but
              attention still shifts rapidly back and forth between the breath
              and various distractions. Whenever a distraction becomes the
              primary focus of your attention, it pushes the meditation object
              into the background. This is called gross distraction. But when
              the mind grows calm, there tends to be another problem, strong
              dullness. To deal with both of these challenges, you develop
              continuous introspective awareness to alert you to their presence.
            </p>
            <p className="pt-6">
              <VideosLink
                isExplanation={true}
                explanationUrl="https://www.youtube.com/embed/BdbmDQffZYQ"
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
