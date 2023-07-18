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
import VideosLink from "../components/videosLink";
import Modal from "../components/modal";

const features = [
  {
    name: "Goal",
    description:
      " Effortlessly sustained exclusive attention and powerful mindfulness.",
    icon: FlagIcon,
  },
  {
    name: "Obstacles",
    description:
      "Distractions and dullness will return if you stop exerting effort. You must keep sustaining effort until exclusive attention and mindfulness become automatic, then effort will no longer be necessary. Boredom, restlessness, and doubt tend to arise during this time. Also, bizarre sensations and involuntary body movements can distract you from your practice. Knowing when to drop all effort is the next obstacle. But making effort has become a habit, so it’s hard to stop.",
    icon: NoSymbolIcon,
  },
  {
    name: "Skills",
    description:
      "Practicing patiently and diligently will bring you to the threshold of effortlessness. It will get you past all the boredom and doubt, as well as the bizarre sensations and movements. Purposely relaxing your effort from time to time will let you know when effort and vigilance are no longer necessary. Then you can work on letting go of the need to be in control. Various Insight and jhāna practices add variety at this Stage.",
    icon: AcademicCapIcon,
  },

  {
    name: "Mastery",
    description:
      "You can drop all effort, and the mind still maintains an unprecedented degree of stability and clarity.",
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
              Stage7
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-orange-700 sm:text-4xl">
              Unification of mind
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              You can now investigate any object with however broad or narrow a
              focus you choose. But you have to stay vigilant and make a
              continuous effort to keep subtle distractions and subtle dullness
              at bay.
            </p>
            <p className="pt-6">
              <VideosLink
                isExplanation={true}
                explanationUrl="https://www.youtube.com/embed/jk-wuit9iuM"
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
