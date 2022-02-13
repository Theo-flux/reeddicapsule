import React, { useState } from "react";
import { Link } from "gatsby";
import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";

const isBrowser = () => typeof window !== "undefined";

const navigation = [
  {
    name: "Products",
    href: undefined,
    menu: true,
    menuItems: [
      {
        name: "Reeddi Capsule",
        desc: "Provides clean renewable 24/7",
        img: "/navbar/reeddi_menu.png",
      },
      {
        name: "Reeddi Marketplace",
        desc: "Own anything temporarily",
        img: "/navbar/tempown_menu.png",
      },
    ],
  },
  { name: "About", href: "/about", menu: false },
  { name: "Contact", href: "#contact", menu: false },
  {
    name: "Learn",
    href: "/ambassador",

    // menu: true,
    // menuItems: [
    //   {
    //     name: "Reeddi Capsule",
    //     desc: "Provides clean renewable 24/7.",
    //     img: "/navbar/reeddi_menu.png",
    //   },
    // ],
  },
  { name: "Press", href: "/press", menu: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className={`${
        mobileOpen ? "bg-[white]" : "cstm-bg-green-gradient"
      } fixed w-full z-30`}
    >
      <div className="w-11/12 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-end sm:justify-between h-16">
          <div className="flex-1 flex items-center justify-between sm:items-stretch">
            <Link
              to="/"
              className="absolute inset-y-0 left-0 flex-shrink-0 flex items-center"
            >
              <img className="block w-auto" src="/reeddi.svg" alt="Workflow" />
            </Link>
            <FullNav />
          </div>
          <div className="sm:hidden">
            {/* Mobile menu button*/}
            <MobileNav open={mobileOpen} setOpen={setMobileOpen} />
            {/* Mobile menu*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileNav({ open, setOpen }) {
  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      >
        <span className="sr-only">Open main menu</span>
        {open ? (
          <p className="block h-6 w-6" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </p>
        ) : (
          <p className="block h-6 w-6" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </p>
        )}
      </button>

      {open && (
        <div className="flex sm:hidden justify-center w-full mx-auto bg-[white]">
          <div className="absolute inset-y-14 -right-6 pt-8 pb-3 flex flex-col w-screen h-max bg-[white]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  isBrowser() && window.location.pathname.includes(item.href)
                    ? "text-cstm-green"
                    : "text-[black] hover:text-[gray] hover:text-white",
                  "px-3 pt-2 pb-1 rounded-md text-sm w-11/12"
                )}
                style={{ marginLeft: "2vw" }}
                aria-current={
                  isBrowser() && window.location.pathname.includes(item.href)
                    ? "page"
                    : undefined
                }
              >
                {item.menu ? (
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="w-full flex justify-between">
                        <span className="sr-only">Open {item.name} menu</span>
                        {item.name}
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className=" -rotate-90 transform inline w-4 h-4 ml-1 mt-0.5 "
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right py-4 flex flex-col justify-center absolute -left-4 mt-2 w-80 rounded-md shadow-lg bg-[white] text-[black] focus:outline-none">
                        {item.menuItems.map((menuItem) => (
                          <Menu.Item key={menuItem.img} className="">
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                <div className="flex pl-8 py-4 w-full">
                                  <img
                                    className="w-14 h-12 pr-3 self-center"
                                    alt={menuItem.name}
                                    src={menuItem.img}
                                  />
                                  <p className="flex flex-col">
                                    <span className="font-medium text-xl">
                                      {menuItem.name}
                                    </span>
                                    <span className="text-cstm-grey">
                                      {menuItem.desc}
                                    </span>
                                  </p>
                                </div>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export function FullNav() {
  const noContactSection = isBrowser()
    ? window.location.pathname.includes("ambassador") ||
      window.location.pathname.includes("press")
    : null;
  console.log(noContactSection);
  return (
    <div className="hidden sm:flex justify-end lg:mr-10 w-full mx-auto">
      <div className="flex space-x-2 lg:space-x-10">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              isBrowser() && window.location.pathname.includes(item.href)
                ? "text-cstm-green"
                : "text-[black] hover:text-[gray] hover:text-white",
              "px-3 pt-2 pb-1 rounded-md text-sm",
              noContactSection && item.name === "Contact" ? "hidden" : ""
            )}
            aria-current={
              isBrowser() && window.location.pathname.includes(item.href)
                ? "page"
                : undefined
            }
          >
            {item.menu ? (
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button>
                    {" "}
                    <span className="sr-only">Open {item.name} menu</span>
                    {item.name}
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="inline w-4 h-4 ml-1 -mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right py-4 flex flex-col justify-center absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-[white] text-[black] focus:outline-none">
                    {item.menuItems.map((menuItem) => (
                      <Menu.Item key={menuItem.img} className="">
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex pl-8 py-4 w-full">
                              <img
                                className="w-14 h-12 pr-3 self-center"
                                alt={menuItem.name}
                                src={menuItem.img}
                              />
                              <p className="flex flex-col">
                                <span className="font-medium text-xl">
                                  {menuItem.name}
                                </span>
                                <span className="text-cstm-grey">
                                  {menuItem.desc}
                                </span>
                              </p>
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              item.name
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
