import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../atoms/Logo";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "Github", href: "https://github.com/wanyi-ng" },
  // { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 backdrop-blur-sm bg-white/30">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Randomizer Wheel</span>
            <Logo />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars2Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="/create"
              className={({ isActive }) =>
                isActive ? "hidden" : "text-sm font-semibold leading-6 text-gray-900"
              }
          >
            Start Randomizing <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Randomizer Wheel</span>
              <Logo />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <NavLink
                  to="/create"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Start Randomizing
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
