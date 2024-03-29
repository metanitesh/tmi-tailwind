"use client";

import React from "react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowUpIcon,
  ArrowUturnUpIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Stage1",
    description: "Establish a daily meditation practice",
    href: "/stage1",
    icon: ArrowUturnUpIcon,
  },
  {
    name: "Stage2",
    description: "Overcome Mind wandering",
    href: "/stage2",
    icon: ArrowUpIcon,
  },
  {
    name: "Stage3",
    description: "Overcome Forgetting",
    href: "/stage3",
    icon: ArrowLongUpIcon,
  },
  {
    name: "Stage4",
    description: "Overcome Gross Distraction and Strong Dullness",
    href: "/stage4",
    icon: ArrowLongUpIcon,
  },
  {
    name: "Stage5",
    description: "Overcome subtle dullness",
    href: "/stage5",
    icon: ArrowLongUpIcon,
  },
  {
    name: "Stage6",
    description: "Overcome subtle distraction",
    href: "/stage6",
    icon: ArrowLongUpIcon,
  },
  {
    name: "Stage7",
    description: "Unification of mind",
    href: "/stage7",
    icon: ArrowLongUpIcon,
  },
  {
    name: "Stage8",
    description: "Pacifying the Senses",
    href: "/stage8",
    icon: ArrowLongUpIcon,
  },
  {
    name: "Stage9",
    description: "Calming Meditative Joy",
    href: "/stage9",
    icon: ArrowLongUpIcon,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white border-b-2">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-col gap-y-2 justify-between w-full sm:flex-row">
          <Link href="/" className=" text-orange-700 grow">
            <b>TMI Meditation</b>
          </Link>

          <Popover.Group className=" lg:flex lg:gap-x-12 pr-10">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-orange-700">
                Stages
                <ChevronDownIcon
                  className="h-5 w-5 flex-none"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-orange-600"
                          aria-hidden="true"
                        />
                      </div> */}
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>

          <Link
            href="https://calendly.com/nitesh-grep/30min?month=2023-07"
            target="_blank"
            className="text-sm font-semibold leading-6 text-orange-700 underline"
          >
            One to One session
          </Link>
        </div>

        <div className="flex lg:hidden hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
