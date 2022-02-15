import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ContactForm({ open, handleOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={() => handleOpen(false)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 mt-16 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <form
              action="https://formspree.io/f/xvolaooa"
              method="POST"
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-[#f7fcfa] px-6 md:px-10 py-6 md:py-10">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block tracking-wide text-xs font-matter text-[#6d6969] mb-2"
                      for="grid-first-name"
                    >
                      First name *
                    </label>
                    <input
                      className="appearance-none bg-[#f7fcfa] block w-full bg-gray-200 border border-[#6d6969] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Oluwaferanmi"
                      name="firstname"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block tracking-wide text-xs font-matter text-[#6d6969] mb-2"
                      for="grid-last-name"
                    >
                      Last name *
                    </label>
                    <input
                      className="appearance-none bg-[#f7fcfa] block w-full bg-gray-200 border border-[#6d6969] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Chukwuemeka"
                      name="lastname"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block tracking-wide text-xs font-matter text-[#6d6969] mb-2"
                      for="grid-password"
                    >
                      E-mail *
                    </label>
                    <input
                      className="appearance-none bg-[#f7fcfa] block w-full bg-gray-200 border border-[#6d6969] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                      placeholder="haleemah@workmail.com"
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block tracking-wide text-xs font-matter text-[#6d6969] mb-2"
                      for="grid-password"
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      className="no-resize appearance-none block bg-[#f7fcfa] w-full bg-gray-200 border border-[#6d6969] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                      id="message"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="shadow bg-cstm-green hover:bg-teal-400 focus:shadow-outline focus:outline-none text-[white] font-matter py-2 px-4 rounded"
                    type="submit"
                    onClick={() => handleOpen(false)}
                  >
                    Submit
                  </button>
                </div>
                <hr className="mt-10 border-[#6d6969] w-full" />
                <p className="py-2 text-[#6d6969] text-xs">
                  Support:{" "}
                  <a
                    href="mailto:support@tempown.com"
                    className="text-xs text-cstm-green"
                  >
                    support@tempown.com
                  </a>{" "}
                  | Enquires:
                  <a
                    href="mailto:hello@tempown.com"
                    className="text-xs text-cstm-green"
                  >
                    hello@tempown.com{" "}
                  </a>
                  | Phone:
                  <a
                    href="tel:+2348122888638"
                    className="text-xs text-cstm-green"
                  >
                    (234) 812-288-8638
                  </a>
                </p>
              </div>
            </form>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
