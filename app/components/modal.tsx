"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Modal({ open, setOpen, url }: any) {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div
            className="fixed inset-0 overflow-y-auto"
            onClick={() => setOpen(false)}
          >
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="fixed top-5 bottom-5 left-5 right-5 z-30 overflow-hidden rounded-2x p-6 text-left align-middle  transition-all">
                  {/* <div className="relative top-0 left-0 right-0 bottom-0"> */}
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      paddingTop: 25,
                      height: 0,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        zIndex: 100,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="bg-orange-600 rounded-md p-2 inline-flex items-center justify-center text-orange-400  focus:outline-none focus:ring-2 focus:ring-inset  "
                        style={{
                          position: "absolute",
                          top: "-40px",
                          right: "-20px",
                          zIndex: 1000,
                        }}
                      >
                        <span className="sr-only">Close menu</span>

                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          color="white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <iframe
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "90%",
                        zIndex: 50,
                      }}
                      frameborder="0"
                      allowfullscreen="1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      title="The mind illuminated"
                      src={url}
                      id="widget2"
                    ></iframe>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export function Modal2({ open, setOpen, url }: any) {
  // const cancelButtonRef = useRef(null);

  return (
    <>hello</>
    // <div className="relative pt-20">
    // <iframe
    //   frameborder="0"
    //   allowfullscreen="1"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //   title="Welcome How To  Succeed FINAL"

    //   src={url}
    //   id="widget2"
    //   className="absolute left-10 top-10 w-full h-full"
    // ></iframe>
    // </div>
  );
  // return (
  //   <Transition.Root show={open} as={Fragment}>
  //     <Dialog
  //       as="div"
  //       className="relative z-10"
  //       initialFocus={cancelButtonRef}
  //       onClose={setOpen}
  //     >
  //       <Transition.Child
  //         as={Fragment}
  //         enter="ease-out duration-300"
  //         enterFrom="opacity-0"
  //         enterTo="opacity-100"
  //         leave="ease-in duration-200"
  //         leaveFrom="opacity-100"
  //         leaveTo="opacity-0"
  //       >
  //         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
  //       </Transition.Child>
  //       <div className="fixed inset-0 z-10 overflow-y-auto">
  //         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
  //           <Transition.Child
  //             as={Fragment}
  //             enter="ease-out duration-300"
  //             enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  //             enterTo="opacity-100 translate-y-0 sm:scale-100"
  //             leave="ease-in duration-200"
  //             leaveFrom="opacity-100 translate-y-0 sm:scale-100"
  //             leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  //           >
  //             <div className="fixed inset-0 flex items-center justify-center p-4 ">
  //             <Dialog.Panel className="w-full max-w-sm rounded bg-white max-w-7xl">
  //               <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
  //                 <div className="sm:flex sm:items-start">
  //                   <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left " >

  //                     <iframe
  //                       frameborder="0"
  //                       allowfullscreen="1"
  //                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //                       title="Welcome How To  Succeed FINAL"
  //                       width="100%" height="100%"
  //                       src={url}
  //                       id="widget2"
  //                       className="absolute top-10 left-10 bottom-10 right-10"
  //                     ></iframe>

  //                   </div>
  //                 </div>
  //               </div>

  //             </Dialog.Panel>
  //             </div>
  //           </Transition.Child>
  //         </div>
  //       </div>
  //     </Dialog>
  //   </Transition.Root>
  // );
}
