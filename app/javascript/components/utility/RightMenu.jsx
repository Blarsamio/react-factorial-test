import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Metrics from "../metrics/Metrics";
import GetData from "../utility/GetData";

function RightMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const data = GetData();


  return (
    <div className="relative">
      <div className="fixed right-0 top-0 z-50">
        <button
          type="button"
          className="text-black hover:text-radical"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Close main menu</span>
          <MenuIcon className="h-6 w-6" aria-hidden="false" />
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
      <div
        ref={ref}
        className="fixed inset-0 z-40"
        onClick={() => setIsOpen(false)}
      >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>      </Transition>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
          <div
            ref={ref}
            className="fixed top-0 right-0 z-50 w-64 h-screen bg-white border-radical border-2 shadow-xl"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-radical">
              <h2 className="text-lg font-medium text-white">Menu</h2>

            </div>
            <div className="py-4 px-4">
              <nav className="space-y-3">
                <Metrics items={data} />
              </nav>
            </div>
          </div>
      </Transition>
    </div>
  );
}

export default RightMenu;
