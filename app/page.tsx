import Navbar from "./../app/components/navbar";

import {
  PlayIcon,
  ArrowTrendingUpIcon,
  UserIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Theory",
    description:
      "Concise and simple explanation of each stage's science, goals, and specific techniques relevant to goal.",
    icon: PlayIcon,
  },
  {
    name: "Practice",
    description:
      "Longs and short Guided meditations, meditation timer, and journaling to help you cultivate your practice.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Mentoring",
    description:
      "Talk to experience meditatators to help you with your practice and answer any questions you may have.",
    icon: UserIcon,
  },
  {
    name: "Resources",
    description:
      "Recommendation and resources to strengthen practice in each stage.",
    icon: MegaphoneIcon,
  },
];

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-5 sm:py-20 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-light leading-7 text-orange-600">
              Based on{" "}
              <span className="font-bold underline">The mind illuminated </span>
              and Samatha tradition
            </h2>
            <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl text-orange-600">
              Cultivate meditation practice systematically
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover the transformative power of meditation with The Mind
              Illuminated and the Samatha tradition. This practical and
              systematic approach will guide you through nine stages of
              meditation, helping you cultivate greater concentration, clarity,
              and equanimity.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
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
    </div>
  );
}
