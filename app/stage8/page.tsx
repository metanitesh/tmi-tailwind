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
      "Complete pacification of the senses and the full arising of meditative joy.",
    icon: FlagIcon,
  },
  {
    name: "Obstacles",
    description:
      "he primary challenge is not to be distracted or distressed by the variety of extraordinary experiences during this Stage: unusual, and often unpleasant, sensations, involuntary movements, feelings of strong energy currents in the body, and intense joy. Simply let them be.",
    icon: NoSymbolIcon,
  },
  {
    name: "Skills",
    description:
      "Practicing effortless attention and introspective awareness will naturally lead to continued unification, pacification of the senses, and the arising of meditative joy. Jhāna and other Insight practices are very productive as part of this process.",
    icon: AcademicCapIcon,
  },

  {
    name: "Mastery",
    description:
      "When the eyes perceive only an inner light, the ears perceive only an inner sound, the body is suffused with a sense of pleasure and comfort, and your mental state is one of intense joy. With this mental and physical pliancy, you can sit for hours without dullness, distraction, or physical discomfort.",
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
              Stage8
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-orange-700 sm:text-4xl">
              Mental pliancy and pacifying the senses
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With mental pliancy, you can effortlessly sustain exclusive
              attention and mindfulness, but physical pain and discomfort still
              limit how long you can sit. The bizarre sensations and involuntary
              movements that began in Stage Seven not only continue, but may
              intensify. With continuing unification of mind and complete
              pacification of the senses, physical pliancy arises, and these
              problems disappear. Pacifying the senses doesn’t imply going into
              some trance. It just means that the five physical senses, as well
              as the mind sense,8 temporarily grow quiet while you meditate.
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
