import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import navigation from "@/utils/navigation";
import Image from "next/image";
import { capitalCase } from "change-case";

function MobileMenue({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-76">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-4 flex pt-4 sm:pl-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full overflow-y-auto bg-black p-6 text-white scrollbar-thin scrollbar-thumb-[#878787] scrollbar-track-[#000000]">
                    <div className="w-full">
                      <div className="w-full">
                        <div className=" w-full flex justify-center mb-16">
                          <Image
                            className=" w-[60%]"
                            src={"/images/logo.png"}
                            width={313}
                            height={65}
                            alt="logo"
                          />
                        </div>

                        {navigation.map(({ name, children }) => (
                          <div
                            key={name}
                            className=" border-b border-b-[#cbcbcb5d]"
                          >
                            <div className=" py-[13px] text-[13px] font-bold cursor-pointer">
                              {capitalCase(name)}
                            </div>
                            {/* {children?.length &&
                              children.map((link) => (
                                <ul key={link.name} className="pl-5">
                                  <li className="border-t border-t-[#E9E9E9] w-full py-[12px] pl-[25px] pr-[63px]">
                                    <a href={link.href} className=" text-base">
                                      {link.name}
                                    </a>
                                  </li>
                                </ul>
                              ))} */}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default MobileMenue;
