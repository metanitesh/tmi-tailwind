import Link from "next/link";
import Navbar from "./../app/components/navbar";
import { Analytics } from "@vercel/analytics/react";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Stage1",
    description: "Establishing a Practice",
    icon: ChevronRightIcon,
  },
  {
    name: "Stage2",
    description: "Overcome Mind wandering",
    icon: ChevronRightIcon,
  },
  {
    name: "Stage3",
    description: "Overcome Forgetting",
    icon: ChevronRightIcon,
  },
  {
    name: "Stage4",
    description: "Overcome Gross Distraction and Strong Dullness",
    icon: ChevronRightIcon,
  },
  {
    name: "Stage5",
    description: "Overcome subtle dullness",
    icon: ChevronRightIcon,
  },

  {
    name: "Stage6",
    description: "Overcome subtle distraction",
    icon: ChevronRightIcon,
  },

  {
    name: "Stage7",
    description: "Unification of mind",
    icon: ChevronRightIcon,
  },

  {
    name: "Stage8",
    description: "Pacifying the Senses",
    icon: ChevronRightIcon,
  },

  {
    name: "Stage9",
    description: "Calming Meditative Joy",
    icon: ChevronRightIcon,
  },
];

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <Analytics />
      <div className="overflow-hidden bg-white py-24 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-light leading-7 text-orange-700">
                  Based on{" "}
                  <span className="font-bold ">The mind illuminated </span>
                </h2>
                <p className="mt-2 text-xl font-light tracking-tight text-gray-900 sm:text-2xl text-orange-700">
                  Cultivate{" "}
                  <span className="font-bold">
                    stable and focused attention
                  </span>{" "}
                  in Nine progressive stages of
                  <span className="font-bold"> Samatha meditation</span>
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Based on traditional Samatha meditation and scientific
                  approach of The Mind Illuminated, this website will
                  systematically guide you through Nine stages of Samatha
                  meditation to build stable and focused attention.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <Link
                        href={`/${feature.name.toLowerCase()}`}
                        key={feature.name}
                        className="hover:text-orange-600"
                      >
                        <dt className="inline font-semibold text-orange-700">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-orange-700"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </Link>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="/samatha.jpeg"
              alt="Product screenshot"
              className="w-[30rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[42rem] md:-ml-4 lg:-ml-0"
              width={600}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
